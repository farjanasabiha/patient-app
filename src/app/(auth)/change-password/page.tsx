"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Call your API to update password
      // const response = await fetch("/api/change-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ password }),
      // });

      // if (!response.ok) throw new Error("Failed to change password");

      // Mock successful password change
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard after password change
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Failed to change password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom px-4">
      <div className="w-full max-w-[456px] bg-white rounded-lg shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
        <div className="flex flex-col items-start p-4 sm:p-5 gap-4">
          {/* Logo Container */}
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

          {/* Title and Description */}
          <div className="w-full">
            <h1 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] leading-[30px] sm:leading-[36px] mb-2">
              Change Your Password
            </h1>
            <p className="text-[14px] text-[#797979] leading-[21px]">
              You need to change your password before continuing to your
              account. Please create a new password that is secure.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* New Password Field */}
            <div className="space-y-1">
              <label className="text-[14px] font-medium text-[#222222]">
                New Password
              </label>
                <div className="box-border flex flex-row items-center p-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] flex-none self-stretch relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full h-[21px] font-['Poppins',_sans-serif] font-normal text-[14px] leading-[21px] text-[#8E8E93] flex-grow border-none outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <label className="text-[14px] font-medium text-[#222222]">
                Confirm Password
              </label>
              <div className="box-border flex flex-row items-center p-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] flex-none self-stretch relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full h-[21px] font-['Poppins',_sans-serif] font-normal text-[14px] leading-[21px] text-[#8E8E93] flex-grow border-none outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-[14px]">{error}</p>}

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={loading}
                className="flex flex-row items-center py-[5px] px-[20px] gap-[10px] h-[31px] bg-[#0040DD] rounded-[6px] border-none cursor-pointer hover:bg-[#002D9B]"
              >
                <span className="font-['Poppins',_sans-serif] font-semibold text-[14px] leading-[21px] text-white">
                  {loading ? "Changing Password..." : "Change Password"}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
