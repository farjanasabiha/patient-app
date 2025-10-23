import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // Get the user's input and the stored CAPTCHA text
        const { userInput } = await req.json();
        const storedCaptchaText = req.cookies.get('captcha-text')?.value;

        if (!userInput || !storedCaptchaText) {
            return NextResponse.json(
                { success: false, error: 'Missing required data' },
                { status: 400 }
            );
        }

        // Case-sensitive validation (exact match required)
        const isValid = userInput === storedCaptchaText;

        // Clear the CAPTCHA cookie after validation
        const response = NextResponse.json({
            success: true,
            isValid
        });

        if (isValid) {
            // If valid, set a verification cookie that can be checked later
            response.cookies.set({
                name: 'captcha-verified',
                value: 'true',
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 3600, // 1 hour
            });
        }

        // Clear the old captcha text cookie
        response.cookies.set({
            name: 'captcha-text',
            value: '',
            path: '/',
            maxAge: 0, // Expire immediately
        });

        return response;
    } catch (error) {
        console.error('Error validating CAPTCHA:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to validate CAPTCHA' },
            { status: 500 }
        );
    }
} 