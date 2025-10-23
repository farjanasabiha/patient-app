"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

interface TwoFactorProps {
  email: string;
  onVerify: (code: string) => void;
}

const DEMO_2FA_CODE = "246810";

export function TwoFactor({ email, onVerify }: TwoFactorProps) {
  const { complete2fa } = useAuth();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(null);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all digits are entered, verify the code
    if (value && index === 5) {
      const entered = newCode.join("");
      if (entered === DEMO_2FA_CODE) {
        complete2fa(entered);
        onVerify(entered);
      } else {
        setError("Invalid code. Use demo code: " + DEMO_2FA_CODE);
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  const handleVerifyClick = () => {
    const entered = code.join("");
    if (entered === DEMO_2FA_CODE) {
      complete2fa(entered);
      onVerify(entered);
    } else {
      setError("Invalid code. Use demo code: " + DEMO_2FA_CODE);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[456px] bg-white rounded-lg shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
        <div className="flex flex-col items-start p-4 sm:p-5 gap-4">
          <div className="w-[119px] h-[42px] relative">
            <Image
              src="/CorsultLogo.svg"
              alt="CCMP Logo"
              width={119}
              height={42}
              priority
              style={{ width: "119px", height: "42px", objectFit: "contain" }}
            />
          </div>

          <div className="w-full">
            <h1 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] leading-[30px] sm:leading-[36px] mb-2">
              Two factor Authentication
            </h1>
            <p className="text-[14px] text-[#797979] leading-[21px]">
              We&apos;ve sent a 6-digit verification code to your email:{" "}
              <span className="font-semibold">{email}</span>. Please enter the
              code to sign in.
            </p>
            <p className="text-[13px] text-[#0071A4] mt-2">
              <b>Demo code:</b> {DEMO_2FA_CODE}
            </p>
          </div>

          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between gap-2 mt-2">
            {code.map((digit, index) => (
              <div
                key={index}
                className={`w-[52px] sm:w-[64px] h-[64px] sm:h-[74px] border ${
                  digit ? "border-[#0040DD]" : "border-[#797979]"
                } rounded-[3px] flex items-center justify-center`}
              >
                <input
                  ref={handleRef(index)}
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-6 h-[44px] sm:h-[54px] text-[32px] sm:text-[36px] font-semibold ${
                    digit ? "text-[#0040DD]" : "text-[#797979]"
                  } text-center bg-transparent focus:outline-none`}
                  style={{
                    lineHeight: "54px",
                  }}
                />
              </div>
            ))}
          </div>

          {error && (
            <div className="text-red-500 text-sm font-semibold mt-2">
              {error}
            </div>
          )}

          <div className="w-full flex justify-end mt-4">
            <button
              onClick={handleVerifyClick}
              disabled={code.some((digit) => !digit)}
              className={`px-4 py-2 rounded-md text-sm font-medium
                ${
                  code.every((digit) => digit)
                    ? "bg-[#0040DD] hover:bg-[#002D9B] text-white"
                    : "bg-gray-300 cursor-not-allowed text-white"
                }`}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
