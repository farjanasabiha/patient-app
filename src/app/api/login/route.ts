import { NextRequest, NextResponse } from "next/server";
import { demoUsers } from "@/data/demoUsers";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const user = demoUsers.find(u => u.email === email && u.password === password);
    if (!user) {
        return NextResponse.json({ success: false, error: "Invalid email or password" }, { status: 401 });
    }
    const res = NextResponse.json({ success: true, user: { email: user.email, role: user.role, name: user.name } });
    
    // Properly encode the user data for the cookie
    const userString = JSON.stringify(user);
    const encodedUser = encodeURIComponent(userString);
    
    res.cookies.set("demoUser", encodedUser, { 
        path: "/", 
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });
    res.cookies.set("is2faComplete", "false", { 
        path: "/", 
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });
    
    return res;
}