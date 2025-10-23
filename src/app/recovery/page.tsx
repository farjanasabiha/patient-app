"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Captcha } from "@/components/ui/Captcha";
import { useRouter } from "next/navigation";

// Step types for the recovery flow
type RecoveryStep = "email" | "otp";

export default function RecoveryPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [captchaValid, setCaptchaValid] = useState<boolean | null>(null);
  const [captchaAttempted, setCaptchaAttempted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<RecoveryStep>("email");

  // Reset error message when component mounts
  useEffect(() => {
    setCaptchaAttempted(false);
    setError(null);
  }, []);

  // Handle captcha validation from the component
  const handleCaptchaValidated = (isValid: boolean) => {
    console.log("Parent received validation:", isValid);
    setCaptchaValid(isValid);
    setCaptchaAttempted(true);
  };

  // Validate and request OTP
  const handleRequestOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Check if email is filled
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Check CAPTCHA validation
    if (!captchaValid) {
      setCaptchaAttempted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call to send OTP
      // For frontend demo, we'll simulate a successful OTP send
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move to OTP verification step
      setCurrentStep("otp");
      setError(null);
    } catch (error) {
      setError("Failed to send verification code. Please try again.");
      console.error("OTP request error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5 && document.getElementById(`otp-${index + 1}`)) {
      (
        document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  // Handle backspace in OTP input
  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      (
        document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  // Verify OTP and redirect to reset password page
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Check if OTP is complete
    if (otp.some((digit) => !digit)) {
      setError("Please enter the complete verification code");
      return;
    }

    setIsSubmitting(true);

    try {
      //TODO: Implement OTP verification API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to reset password page with email
      // No need to pass token for frontend demo
      router.push(
        `/recovery/reset-password?email=${encodeURIComponent(email)}`
      );
    } catch (error) {
      setError("Invalid verification code. Please try again.");
      console.error("OTP verification error:", error);
      setIsSubmitting(false);
    }
  };

  // Show error message only if CAPTCHA was attempted and is invalid
  const showCaptchaError = captchaAttempted && !captchaValid;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom px-4">
      <div className="w-full max-w-[456px]">
        <div className="bg-white rounded-[8px] p-5 flex flex-col gap-4 shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          {/* Logo Container */}
          <div className="flex flex-col items-start px-[10px] gap-4">
            <div className="w-[119px] h-[37px] relative">
              <Image
                src="/CorsultLogo.svg"
                alt="CCMP Logo"
                width={119}
                height={37}
                priority
              />
            </div>

            {/* Title and Description - Changes based on step */}
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[24px] font-semibold leading-[36px] text-black">
                {currentStep === "email" && "Get back into your account"}
                {currentStep === "otp" && "Verify your email"}
              </h1>
              <p className="text-[14px] leading-[21px] text-[#8E8E93]">
                {currentStep === "email" &&
                  "To recover your account, begin by entering your email and the characters in the picture below."}
                {currentStep === "otp" &&
                  `We've sent a 6-digit verification code to ${email}. Please enter the code to continue.`}
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded bg-red-100 text-red-800 border border-red-200">
              <p>{error}</p>
            </div>
          )}

          {/* Step 1: Email + Captcha Form */}
          {currentStep === "email" && (
            <form onSubmit={handleRequestOTP} className="flex flex-col gap-4">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[41px] px-[10px] py-[10px] border-b border-[#0040DD] rounded-t-[3px] text-[14px] leading-[21px] placeholder:text-gray-dark-100 focus:outline-none"
              />

              {/* Captcha Component */}
              <Captcha onCaptchaValidated={handleCaptchaValidated} />

              {/* Captcha Error - only shown after an attempt */}
              {showCaptchaError && (
                <p className="text-red-500 text-xs mt-[-8px]">
                  Please enter the correct captcha to continue.
                </p>
              )}

              {/* Buttons Container */}
              <div className="flex justify-end gap-2 mt-2">
                <Link
                  href="/login"
                  className="w-[91px] h-[31px] flex items-center justify-center px-5 py-[5px] text-[#0040DD] rounded-[6px] hover:bg-hover-100 transition-colors"
                >
                  <span className="px-5 py-1 rounded-md border border-[#0040DD] h-[31px] text-[14px] font-medium text-[#0040DD] hover:bg-[#E2F7FF]">
                    Cancel
                  </span>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`h-[31px] flex items-center justify-center px-5 py-[5px] rounded-[6px] transition-colors ${
                    isSubmitting
                      ? "bg-[#0040DD]/50 text-white/70 cursor-not-allowed"
                      : "bg-[#0040DD] text-white hover:bg-[#002D9B]"
                  }`}
                >
                  <span className="text-[14px] font-medium leading-[21px]">
                    {isSubmitting ? "Processing..." : "Next"}
                  </span>
                </button>
              </div>
            </form>
          )}

          {/* Step 2: OTP Verification Form */}
          {currentStep === "otp" && (
            <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4">
              {/* OTP Input Fields Container */}
              <div className="w-full flex justify-between gap-2 mt-2">
                {otp.map((digit, index) => (
                  <div
                    key={index}
                    className="w-[64px] h-[74px] border border-[#797979] rounded-[3px] flex items-center justify-center"
                  >
                    <input
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-6 h-[54px] text-[36px] font-semibold text-[#797979] text-center bg-transparent focus:outline-none"
                      style={{
                        fontFamily: "Poppins",
                        lineHeight: "54px",
                      }}
                      autoFocus={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Buttons Container */}
              <div className="flex justify-between items-center mt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep("email")}
                  className="text-[#0040DD] text-sm hover:underline"
                >
                  Back to email
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleRequestOTP}
                    disabled={isSubmitting}
                    className="text-[#0040DD] text-sm hover:underline"
                  >
                    Resend code
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || otp.some((digit) => !digit)}
                    className={`h-[31px] flex items-center justify-center px-5 py-[5px] rounded-[6px] transition-colors ${
                      isSubmitting || otp.some((digit) => !digit)
                        ? "bg-[#0040DD]/50 text-white/70 cursor-not-allowed"
                        : "bg-[#0040DD] text-white hover:bg-[#0040DD]/90"
                    }`}
                  >
                    <span className="text-[14px] font-medium leading-[21px]">
                      {isSubmitting ? "Verifying..." : "Verify"}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
