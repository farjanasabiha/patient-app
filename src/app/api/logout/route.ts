import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({ success: true });
    res.cookies.set("demoUser", "", { 
        path: "/", 
        maxAge: 0,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });
    res.cookies.set("is2faComplete", "", { 
        path: "/", 
        maxAge: 0,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });
    
    return res;
}