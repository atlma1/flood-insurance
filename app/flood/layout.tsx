"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "../../components/progressBar";
import { usePathname } from "next/navigation";

interface FloodLayoutProps {
  children: React.ReactNode;
}

const FloodLayout: FC<FloodLayoutProps> = ({ children }) => {
  const [progress, setProgress] = useState(1);
  const path = usePathname();

  const routeMap: { [key: string]: number } = {
    "/flood/propertyType": 1,
    "/flood/floodZone": 2,
    "/flood/unitSelect": 3,
    "/flood/insurableValue": 4,
    "/flood/loanDetails": 5,
    "/flood/requiredCoverage": 6,
    "/flood/complete": 7,
  };

  useEffect(() => {
    setProgress(routeMap[path]);
  }, [path]);

  return (
    <div className=" justify-center items-center flex flex-col w-full h-full">
      <Image
        src="/images/background.jpeg"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-10 top-0"
      />
      <div className="">{children}</div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default FloodLayout;
