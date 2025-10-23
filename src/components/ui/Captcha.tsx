/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { RotateCw } from "lucide-react";
import { useState, useEffect } from "react";

interface CaptchaProps {
  onCaptchaValidated: (isValid: boolean) => void;
}

export function Captcha({ onCaptchaValidated }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showValidationError, setShowValidationError] = useState(false);

  // Fetch a new captcha from the API
  const fetchCaptcha = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setShowValidationError(false);

      // Call the API to generate a new CAPTCHA
      const response = await fetch("/api/generate-captcha");
      if (!response.ok) {
        throw new Error(`Failed to fetch CAPTCHA: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setCaptchaText(data.captchaText);
        console.log("New CAPTCHA generated");
      } else {
        throw new Error(data.error || "Failed to generate CAPTCHA");
      }

      // Reset state
      setUserInput("");
      setIsValid(null);
      onCaptchaValidated(false);
    } catch (error) {
      console.error("Error fetching CAPTCHA:", error);
      setError("Failed to load CAPTCHA. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize captcha on component mount
  useEffect(() => {
    fetchCaptcha();
  }, []);

  // Validate the captcha
  const validateCaptcha = async () => {
    if (!userInput) {
      return false;
    }

    try {
      // Call the API to validate the CAPTCHA
      const response = await fetch("/api/validate-captcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to validate CAPTCHA: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        const valid = data.isValid;
        setIsValid(valid);
        onCaptchaValidated(valid);

        console.log(
          `CAPTCHA validation result: ${valid ? "Valid" : "Invalid"}`
        );

        // Only show error message if validation failed
        setShowValidationError(!valid);

        if (!valid) {
          // Generate new captcha if validation fails after a delay
          setTimeout(() => {
            fetchCaptcha();
          }, 1500);
        }

        return valid;
      } else {
        throw new Error(data.error || "CAPTCHA validation failed");
      }
    } catch (error) {
      console.error("Error validating CAPTCHA:", error);
      setError("Failed to validate CAPTCHA. Please try again.");
      setIsValid(false);
      onCaptchaValidated(false);
      return false;
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setIsValid(null);
    setShowValidationError(false);
    onCaptchaValidated(false);
  };

  // Check CAPTCHA when input is complete
  const handleInputBlur = async () => {
    if (userInput.length > 0) {
      await validateCaptcha();
    }
  };

  // Handle refresh button click
  const handleRefresh = () => {
    fetchCaptcha();
  };

  // Create a visual representation of the captcha text
  const renderCaptchaDisplay = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-slate-100 to-blue-50 p-4 overflow-hidden">
        {/* Noise background */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-gray-400 opacity-10"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Decorative lines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-blue-500 opacity-20"
            style={{
              height: "1px",
              width: "100%",
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          />
        ))}

        {/* Display the captcha characters with styling */}
        <div className="relative flex space-x-2 select-none">
          {captchaText.split("").map((char, idx) => {
            const rotation = Math.random() * 30 - 15;
            return (
              <span
                key={idx}
                className="inline-block text-navy-600 font-bold text-3xl"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-full max-w-[300px] h-[100px] bg-white flex items-center justify-center overflow-hidden relative rounded-md shadow-sm border border-gray-200">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="w-8 h-8 border-4 border-navy-100 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-2 text-center text-red-500 text-sm">
              {error}
              <button
                onClick={fetchCaptcha}
                className="ml-2 text-blue-500 hover:underline"
              >
                Retry
              </button>
            </div>
          ) : (
            renderCaptchaDisplay()
          )}
        </div>
        <div className="flex flex-col justify-center">
          <button
            type="button"
            className="w-6 h-6 text-gray-dark-100 hover:text-navy-100 transition-colors"
            onClick={handleRefresh}
            aria-label="Refresh captcha"
            disabled={isLoading}
            title="Get a new CAPTCHA"
          >
            <RotateCw
              className={`w-6 h-6 ${isLoading ? "animate-spin" : ""}`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter characters exactly as shown above"
          value={userInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          required
          className={`w-full h-[41px] px-[10px] py-[10px] border-b rounded-t-[3px] text-[14px] leading-[21px] placeholder:text-gray-dark-100 focus:outline-none ${
            isValid === true
              ? "border-green-500"
              : isValid === false
              ? "border-red-500"
              : "border-[#0040DD]"
          }`}
        />

        {isValid === true && (
          <p className="text-green-500 text-xs mt-1">Captcha verified ✓</p>
        )}

        {showValidationError && (
          <p className="text-red-500 text-xs mt-1">
            Incorrect captcha. Case-sensitive - please try again.
          </p>
        )}
      </div>
    </div>
  );
}
