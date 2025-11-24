import React, { ReactNode } from "react";

// Props interface
interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

// Component
const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`max-w-[1350px] mx-auto px-4 sm:px-3 md:px-10 lg:px-10 xl:px-0 py-16 md:py-20 lg:py-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
