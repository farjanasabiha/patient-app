"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

// Component with the search params logic
function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<
    "weak" | "medium" | "strong" | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetStatus, setResetStatus] = useState<"success" | "error" | "idle">(
    "idle"
  );

  // Check if email exists
  useEffect(() => {
    if (!email) {
      setError("Email address missing. Please restart the recovery process.");
    }
  }, [email]);

  // Password strength checker
  useEffect(() => {
    if (!newPassword) {
      setPasswordStrength(null);
      return;
    }

    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      newPassword
    );
    const isLongEnough = newPassword.length >= 8;

    const strengthScore =
      (hasLowerCase ? 1 : 0) +
      (hasUpperCase ? 1 : 0) +
      (hasNumber ? 1 : 0) +
      (hasSpecialChar ? 1 : 0) +
      (isLongEnough ? 1 : 0);

    if (strengthScore <= 2) {
      setPasswordStrength("weak");
    } else if (strengthScore <= 4) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("strong");
    }
  }, [newPassword]);

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate passwords
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (passwordStrength === "weak") {
      setError("Please choose a stronger password");
      return;
    }

    if (!email) {
      setError("Email address missing");
      return;
    }

    setIsSubmitting(true);

    try {
      // For frontend demo, simulate API call success
      // In a real app, this would call an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setResetStatus("success");

      // Redirect to login after successful reset
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setResetStatus("error");
      setError("Failed to reset password. Please try again.");
      console.error("Reset error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get color based on password strength
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "weak":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "strong":
        return "text-green-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom px-4">
      {/* Main Container - matching Figma dimensions */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[456px]">
        <div className="flex flex-col justify-center items-end p-5 gap-4 bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          {/* Logo and Title Container */}
          <div className="flex flex-col items-start px-[10px] gap-4 w-full filter drop-shadow-[0px_1px_4px_rgba(12,12,13,0.05)]">
            {/* Logo */}
            <div className="w-[119px] h-[41.29px] relative">
              <Image
                src="/CorsultLogo.png"
                alt="CCMP Logo"
                width={119}
                height={41}
                priority
              />
            </div>

            {/* Title and Description Container */}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row justify-center items-center w-full">
                <h1 className="font-['Poppins'] font-bold text-[24px] leading-[36px] text-[#1C1C1E] w-full">
                  Password Recovery
                </h1>
              </div>
              <p className="font-['Poppins'] font-normal text-[14px] leading-[21px] text-[#8E8E93] w-full">
                Enter the new password for {email || "Name@company.com"}
              </p>
            </div>
          </div>

          {/* Success/Error Message */}
          {resetStatus !== "idle" && (
            <div
              className={`p-3 rounded w-full ${
                resetStatus === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {resetStatus === "success" ? (
                <p>Password reset successful! Redirecting to login...</p>
              ) : (
                <p>{error || "Unable to reset password. Please try again."}</p>
              )}
            </div>
          )}

          {/* Form Container */}
          <form
            onSubmit={handleResetSubmit}
            className="flex flex-col gap-0 w-full"
          >
            {/* Error message for missing email */}
            {!email && (
              <div className="p-3 rounded bg-red-100 text-red-800 border border-red-200 w-full mb-4">
                <p>
                  Email address missing. Please restart the recovery process.
                </p>
              </div>
            )}

            {/* New Password Input - Matching Figma styling */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row items-center px-[10px] py-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] box-border">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  disabled={!email || resetStatus === "success"}
                  className="w-full font-['Poppins'] text-[14px] leading-[21px] text-[#8E8E93] outline-none bg-transparent placeholder:text-[#8E8E93]"
                  style={{ fontFeatureSettings: '"case" on' }}
                />
              </div>
              {passwordStrength && (
                <div className="flex items-center gap-2 px-[10px] py-1">
                  <span className="text-xs">Strength:</span>
                  <span className={`text-xs font-medium ${getStrengthColor()}`}>
                    {passwordStrength.charAt(0).toUpperCase() +
                      passwordStrength.slice(1)}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password Input - Matching Figma styling */}
            <div className="flex flex-row items-center px-[10px] py-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] box-border">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={!email || resetStatus === "success"}
                className="w-full font-['Poppins'] text-[14px] leading-[21px] text-[#8E8E93] outline-none bg-transparent placeholder:text-[#8E8E93]"
                style={{ fontFeatureSettings: '"case" on' }}
              />
            </div>

            {/* Password match error */}
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="text-red-500 text-xs mt-2 px-[10px]">
                Passwords do not match
              </p>
            )}

            {/* Error message */}
            {error && resetStatus !== "error" && (
              <p className="text-red-500 text-xs mt-2 px-[10px]">{error}</p>
            )}

            {/* Confirm Button - Matching Figma styling */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting || !email || resetStatus === "success"}
                className={`flex items-center justify-center px-5 py-[5px] gap-[10px] w-[98px] h-[31px] rounded-[6px] transition-colors ${
                  isSubmitting || !email || resetStatus === "success"
                    ? "bg-[#0040DD]/50 cursor-not-allowed"
                    : "bg-[#0040DD] hover:bg-[#002D9B]"
                }`}
              >
                <span
                  className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-white w-[58px] text-center"
                  style={{ fontFeatureSettings: '"case" on' }}
                >
                  {isSubmitting ? "Processing..." : "Confirm"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function ResetPasswordLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom px-4">
      <div className="w-full max-w-[456px]">
        <div className="bg-white rounded-[8px] p-5 flex flex-col gap-4 shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          <div className="flex flex-col items-start px-[10px] gap-4">
            <div className="w-[119px] h-[37px] bg-gray-200 animate-pulse"></div>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="h-10 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-10 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="flex justify-end gap-2 mt-2">
              <div className="w-[91px] h-[31px] bg-gray-200 animate-pulse rounded"></div>
              <div className="w-[120px] h-[31px] bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordLoading />}>
      <ResetPasswordForm />
    </Suspense>
  );
}
