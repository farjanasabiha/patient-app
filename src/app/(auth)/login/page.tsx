"use client";

import { ArrowLeft, Plus, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TwoFactor } from "./two-factor";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

type Step = "pick" | "email" | "password" | "2fa";

interface SavedAccount {
  email: string;
  initials: string;
}

export default function LoginPage() {
  const { login, complete2fa } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const savedAccounts: SavedAccount[] = [
    { email: "name@company.com", initials: "NC" },
  ];

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      setStep("2fa");
    } else {
      setError(result.error || "Login failed");
    }
  };

  const handleAccountSelect = (account: SavedAccount) => {
    setEmail(account.email);
    setStep("password");
  };

  const handleTwoFactorVerify = async (code: string) => {
    setError(null);
    setIsLoading(true);

    const result = await complete2fa(code);
    setIsLoading(false);

    if (result.success) {
      router.push("/");
    } else {
      setError(result.error || "2FA failed");
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      setStep("2fa");
    } else {
      setError(result.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom px-4">
      <div className="w-full max-w-[456px]">
        {step === "pick" && (
          <div className="bg-white rounded-[8px] p-5 flex flex-col items-start gap-4 shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
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
              {savedAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => handleAccountSelect(account)}
                  className="w-full h-[68px] flex items-center p-[10px] gap-[10px] hover:bg-hover-100 hover:border-y hover:border-gray-dark-100"
                >
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full p-[10.5px]">
                    <span className="w-[27px] h-[27px] text-[18px] leading-[27px] text-gray-dark-100 font-medium">
                      {account.initials}
                    </span>
                  </div>
                  <span className="text-[14px] leading-[21px] text-black-100">
                    {account.email}
                  </span>
                </button>
              ))}

              <button
                onClick={() => setStep("email")}
                className="w-full h-[68px] flex items-center p-[10px] gap-[10px] hover:bg-hover-100 hover:border-y hover:border-gray-dark-100"
              >
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full p-[10.5px]">
                  <Plus className="w-6 h-6 text-gray-dark-100" />
                </div>
                <span className="text-[14px] leading-[21px] text-black-100">
                  Use another account
                </span>
              </button>
            </div>
          </div>
        )}

        {step === "email" && (
          <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] w-full sm:w-[456px] h-auto sm:h-[313.29px] p-4 sm:p-5 flex flex-col justify-center items-end gap-4 relative">
            <div className="flex flex-col items-start px-0 sm:px-[10px] gap-3 sm:gap-4 w-full h-auto sm:h-[86.29px] filter drop-shadow-sm self-stretch flex-none">
              <div className="w-[119px] h-[42px] relative flex-none">
                <Image
                  src="/CorsultLogo.svg"
                  alt="Corsult Logo"
                  width={119}
                  height={42}
                  priority
                  style={{
                    width: "119px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="flex flex-row justify-center items-center gap-[10px] w-full h-auto sm:h-[29px] flex-none self-stretch">
                <h1 className="w-full h-auto sm:h-[29px] font-['Poppins',_sans-serif] font-bold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] text-[#1C1C1E] flex-grow">
                  Sign in
                </h1>
              </div>
            </div>

            <form
              onSubmit={handleLoginSubmit}
              className="w-full flex flex-col gap-3 sm:gap-4"
            >
              <div className="box-border flex flex-row items-center p-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] flex-none self-stretch">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[21px] font-['Poppins',_sans-serif] font-normal text-[14px] leading-[21px] text-[#1C1C1E] placeholder:text-[#8E8E93] flex-grow border-none outline-none"
                />
              </div>

              <div className="flex flex-col items-start p-0 gap-2 w-full h-auto sm:h-[67px] flex-none self-stretch">
                <div className="box-border flex flex-row items-center p-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] flex-none self-stretch relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-[21px] font-['Poppins',_sans-serif] font-normal text-[14px] leading-[21px] text-[#1C1C1E] placeholder:text-[#8E8E93] flex-grow border-none outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <div className="flex flex-row items-center p-0 gap-2 w-[109px] h-[18px] flex-none">
                  <Link
                    href="/recovery"
                    className="w-[109px] h-[18px] font-['Poppins',_sans-serif] font-semibold text-[12px] leading-[18px] flex items-center text-[#0040DD] hover:text-gray-dark-100 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm font-semibold mt-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="self-end flex flex-row items-center py-[5px] px-[20px] gap-[10px] w-[88px] h-[31px] bg-[#0040DD] rounded-[6px] border-none cursor-pointer hover:bg-[#002D9B] disabled:opacity-60"
                disabled={isLoading}
              >
                <span className="w-[48px] h-[21px] font-['Poppins',_sans-serif] font-semibold text-[14px] leading-[21px] text-white">
                  {isLoading ? "Signing In..." : "Sign In"}
                </span>
              </button>
            </form>
          </div>
        )}

        {step === "password" && (
          <div className="bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] w-full sm:w-[456px] h-auto sm:h-[313.29px] p-4 sm:p-5 flex flex-col justify-center items-end gap-4 relative">
            <div className="flex flex-col items-start px-0 sm:px-[10px] gap-3 sm:gap-4 w-full h-auto sm:h-[86.29px] filter drop-shadow-sm self-stretch flex-none">
              <div className="w-[119px] h-[42px] relative flex-none">
                <Image
                  src="/CorsultLogo.svg"
                  alt="Corsult Logo"
                  width={119}
                  height={42}
                  priority
                  style={{
                    width: "119px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="flex flex-col justify-center items-start gap-1 w-full h-auto sm:h-[29px] flex-none self-stretch">
                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="flex flex-row items-center p-0 gap-1 border-none bg-transparent cursor-pointer mb-1 sm:mb-2"
                >
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-[#1C1C1E]" />
                  <span className="font-['Poppins',_sans-serif] font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] text-[#1C1C1E] truncate max-w-[250px] sm:max-w-full">
                    {email}
                  </span>
                </button>

                <h1 className="w-full h-auto sm:h-[29px] font-['Poppins',_sans-serif] font-bold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] text-[#1C1C1E] flex-grow">
                  Enter password
                </h1>
              </div>
            </div>

            <form
              onSubmit={handlePasswordSubmit}
              className="w-full flex flex-col gap-3 sm:gap-4"
            >
              <div className="box-border flex flex-row items-center p-[10px] gap-[10px] w-full h-[41px] border-b border-[#0040DD] rounded-t-[3px] flex-none self-stretch relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-[21px] font-['Poppins',_sans-serif] font-normal text-[14px] leading-[21px] text-[#1C1C1E] placeholder:text-[#8E8E93] flex-grow border-none outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <div className="flex flex-row items-center p-0 gap-2 w-[130px] h-[18px] flex-none">
                <Link
                  href="/recovery"
                  className="w-[130px] h-[18px] font-['Poppins',_sans-serif] font-semibold text-[12px] leading-[18px] flex items-center text-[#0040DD] hover:text-gray-dark-100 hover:underline"
                >
                  Forgot my password
                </Link>
              </div>

              {error && (
                <div className="text-red-500 text-sm font-semibold mt-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="self-end flex flex-row items-center py-[5px] px-[20px] gap-[10px] w-[88px] h-[31px] bg-[#0040DD] rounded-[6px] border-none cursor-pointer hover:bg-[#002D9B] disabled:opacity-60"
                disabled={isLoading}
              >
                <span className="w-[48px] h-[21px] font-['Poppins',_sans-serif] font-semibold text-[14px] leading-[21px] text-white">
                  {isLoading ? "Signing In..." : "Sign In"}
                </span>
              </button>
            </form>
          </div>
        )}

        {step === "2fa" && (
          <TwoFactor email={email} onVerify={handleTwoFactorVerify} />
        )}
      </div>
    </div>
  );
}
