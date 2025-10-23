export const TableText = ({
  children,
  variant = "normal",
}: {
  children: React.ReactNode;
  variant?: "normal" | "semibold" | "patient";
}) => {
  const baseClasses = "text-sm font-poppins";
  const variantClasses = {
    normal: "text-neutral-400 font-normal",
    semibold: "text-zinc-900 font-semibold",
    patient: "text-sky-700 font-normal",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  );
};
