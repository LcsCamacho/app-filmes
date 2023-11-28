export const Row = ({
  children,
  className,
  gap,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) => {
  return (
    <div className={`flex gap-${gap || "4"} ${className || ""}`}>
      {children}
    </div>
  );
};
