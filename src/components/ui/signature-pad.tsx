"use client";

import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import SignatureCanvas from "react-signature-canvas";
import { PrimaryButton } from "@/components/ui/primary-button";
import { FormLabel } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface SignaturePadRef {
  clear: () => void;
  getSignatureData: () => string | null;
  isEmpty: () => boolean;
  fromDataURL: (dataURL: string) => void;
}

interface SignaturePadProps {
  label?: string;
  value?: string | null;
  onChange?: (signature: string | null) => void;
  className?: string;
  height?: number;
  showClearButton?: boolean;
  clearButtonText?: string;
  clearButtonVariant?: "primary" | "outline" | "secondary" | "danger";
  clearButtonSize?: "default" | "sm" | "lg";
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
}

const SignaturePad = forwardRef<SignaturePadRef, SignaturePadProps>(
  (
    {
      label,
      value,
      onChange,
      className,
      height = 96, // 24 * 4 = 96px (h-24)
      showClearButton = true,
      clearButtonText = "Clear",
      clearButtonVariant = "outline",
      clearButtonSize = "sm",
      disabled = false,
      placeholder,
      required = false,
    },
    ref
  ) => {
    const sigPadRef = useRef<SignatureCanvas>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasSignature, setHasSignature] = React.useState(false);

    // Function to resize canvas
    const resizeCanvas = useCallback(() => {
      if (sigPadRef.current && containerRef.current) {
        const canvas = sigPadRef.current.getCanvas();
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;

        // Set canvas size to match container
        canvas.width = containerWidth;
        canvas.height = height;

        // Clear and redraw if there's existing data
        if (value) {
          sigPadRef.current.fromDataURL(value);
        }
      }
    }, [height, value]);

    useImperativeHandle(ref, () => ({
      clear: () => {
        sigPadRef.current?.clear();
        setHasSignature(false);
        onChange?.(null);
      },
      getSignatureData: () => {
        if (sigPadRef.current?.isEmpty()) {
          return null;
        }
        return sigPadRef.current?.toDataURL() || null;
      },
      isEmpty: () => {
        return sigPadRef.current?.isEmpty() || true;
      },
      fromDataURL: (dataURL: string) => {
        sigPadRef.current?.fromDataURL(dataURL);
        setHasSignature(true);
      },
    }));

    // Resize canvas on mount and window resize
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        resizeCanvas();
      }, 100); // Small delay to ensure container is rendered

      const handleResize = () => {
        resizeCanvas();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);
      };
    }, [resizeCanvas]);

    // Load initial value if provided
    useEffect(() => {
      if (value && sigPadRef.current) {
        setTimeout(() => {
          sigPadRef.current?.fromDataURL(value);
          setHasSignature(true);
        }, 150);
      } else {
        setHasSignature(false);
      }
    }, [value]);

    const handleClear = () => {
      sigPadRef.current?.clear();
      setHasSignature(false);
      onChange?.(null);
    };

    const handleEnd = () => {
      if (!disabled) {
        const isEmpty = sigPadRef.current?.isEmpty();
        const signatureData = isEmpty ? null : sigPadRef.current?.toDataURL();
        setHasSignature(!isEmpty);
        onChange?.(signatureData || null);
      }
    };

    return (
      <div className={cn("flex flex-col gap-0.5", className)}>
        {label && (
          <FormLabel
            required={required}
            className="text-xs font-semibold text-neutral-400"
          >
            {label}
          </FormLabel>
        )}

        <div className="relative w-full" ref={containerRef}>
          <SignatureCanvas
            ref={sigPadRef}
            canvasProps={{
              className: cn(
                "border border-neutral-400 rounded-[3px] bg-white cursor-crosshair",
                "w-full",
                disabled && "opacity-50 cursor-not-allowed"
              ),
              style: { width: "100%", height: `${height}px` },
            }}
            onEnd={handleEnd}
            penColor="black"
            backgroundColor="white"
            velocityFilterWeight={0.7}
            minWidth={0.5}
            maxWidth={2.5}
            throttle={16}
            minDistance={1}
            dotSize={1}
          />

          {/* Placeholder text when empty */}
          {placeholder && sigPadRef.current?.isEmpty() !== false && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-gray-400 text-sm">{placeholder}</span>
            </div>
          )}
        </div>

        {showClearButton && (
          <div className="flex justify-end mt-2">
            <PrimaryButton
              type="button"
              variant={hasSignature ? "primary" : clearButtonVariant}
              size={clearButtonSize}
              onClick={handleClear}
              disabled={disabled}
              className={cn(
                !hasSignature &&
                  clearButtonVariant === "outline" &&
                  "bg-stone-300 text-white border-stone-300 hover:bg-stone-400"
              )}
            >
              {clearButtonText}
            </PrimaryButton>
          </div>
        )}
      </div>
    );
  }
);

SignaturePad.displayName = "SignaturePad";

export { SignaturePad };
export default SignaturePad;
