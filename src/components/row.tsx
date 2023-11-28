export const Row = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`flex gap-4 ${className}`}>{children}</div>;
};
