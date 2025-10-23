import { NextRequest, NextResponse } from "next/server";

const DEMO_2FA_CODE = "246810";

export async function POST(req: NextRequest) {
    const { code } = await req.json();
    if (code === DEMO_2FA_CODE) {
        const res = NextResponse.json({ success: true });
        res.cookies.set("is2faComplete", "true", { 
            path: "/", 
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });
        return res;
    }
    return NextResponse.json({ success: false, error: "Invalid code. Use demo code: 246810" }, { status: 401 });
}