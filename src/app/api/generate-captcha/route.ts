/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Generate a random captcha string with mixed case
function generateCaptchaText(length = 6) {
    // Include both uppercase and lowercase letters for case sensitivity
    // Exclude confusing characters like O/0, l/I/1, etc.
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    const charsLength = chars.length;

    // Use crypto for better randomness
    const randomValues = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        // Convert random bytes to index
        const randomIndex = randomValues[i] % charsLength;
        result += chars[randomIndex];
    }

    return result;
}

export async function GET(req: NextRequest) {
    try {
        // Generate a random 6-character CAPTCHA with mixed case
        const captchaText = generateCaptchaText(6);

        // Create response with CAPTCHA text
        const response = NextResponse.json({
            success: true,
            captchaText: captchaText,
            caseSensitive: true // Signal that this CAPTCHA is case-sensitive
        });

        // Set a cookie with the CAPTCHA text for server-side validation
        response.cookies.set({
            name: 'captcha-text',
            value: captchaText,
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 600, // 10 minutes
        });

        return response;
    } catch (error) {
        console.error('Error generating CAPTCHA:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to generate CAPTCHA' },
            { status: 500 }
        );
    }
} 