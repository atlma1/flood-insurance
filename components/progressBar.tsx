import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProgressBarProps {
  progress: number;
  totalPages: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress, totalPages }) => {
  const router = useRouter();

  const onBack = () => {
    router.back();
  }

  return (
    <div className="flex-row flex items-center absolute bottom-10 gap-6">
      {progress > 1 && progress < totalPages && (
        <div className="flex-row flex bg-background p-[11px] rounded-[19px] gap-[10px]">
          <button onClick={onBack}>
            <Image
              src="/icons/chevronIcon.svg"
              alt="chevron"
              width={16}
              height={16}
              className="rotate-90"
            />
          </button>

          <Image
            src="/icons/chevronIcon.svg"
            alt="chevron"
            width={16}
            height={16}
            className="-rotate-90"
          />
        </div>
      )}
      <div className="rounded-[12px] bg-background h-[12px] w-[598px]">
        <div
          style={{
            width: `${(progress / totalPages) * 100}%`,
            height: "12px",
            backgroundColor: "rgb(176, 255, 145)",
            borderRadius: "12px",
          }}
        />
      </div>
      <p className=" font-inter font-normal">{progress + "/" + totalPages}</p>
    </div>
  );
};
export default ProgressBar;
