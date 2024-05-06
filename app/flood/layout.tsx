"use client";

import { FC, useState } from "react";
import Image from "next/image";
import ProgressBar from "../../components/progressBar";

interface FloodLayoutProps {
  children: React.ReactNode;
}

const FloodLayout: FC<FloodLayoutProps> = ({ children }) => {
  const [progress, setProgress] = useState(1);

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
