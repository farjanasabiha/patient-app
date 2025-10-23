// Reusable components for cleaner code
export const TableCell = ({
  children,
  width,
  className = "",
}: {
  children: React.ReactNode;
  width: string;
  className?: string;
}) => (
  <div
    className={`${width} px-3.5 py-3 flex justify-start items-center gap-2.5 ${className}`}
  >
    {children}
  </div>
);
