import { FC } from "react";
import Image from "next/image";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const total = 7;
  return (
    <div className="flex-row flex items-center absolute bottom-10">
      <div className="flex-row flex bg-background p-[11px] rounded-[19px] gap-[10px]">
        <Image
          src="/icons/chevronIcon.svg"
          alt="chevron"
          width={20}
          height={20}
          className="rotate-90"
        />
        <Image
          src="/icons/chevronIcon.svg"
          alt="chevron"
          width={20}
          height={20}
          className="-rotate-90"
        />
      </div>
      <div className="rounded-[12px] bg-background h-[12px] w-[598px]">
        <p>tyler</p>
      </div>
      <p className=" font-inter font-normal">{progress + "/" + total}</p>
    </div>
  );
};
export default ProgressBar;
