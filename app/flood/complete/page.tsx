"use client";
import { useRouter } from "next/navigation";
import Button from "../../../components/button";
import Title from "../../../components/title";
import Image from "next/image";

const CompletePage = () => {
  const router = useRouter();

  const onRestart = () => {
    router.push("./propertyType");
  };
  const onDownload = () => {};
  return (
    <div className=" flex flex-col items-center justify-center">
      <Title title="Complete!" />
      <Image
        src="/icons/completeIcon.svg"
        width={166}
        height={166}
        alt="complete"
        className="mt-[127px]"
      />
      <div className="flex-row flex justify-center mt-[163px] gap-[25px]">
        <Button
          label="Download"
          icon="/icons/downloadIcon.svg"
          onClick={onDownload}
        />
        <Button
          label="Restart"
          icon="/icons/restartIcon.svg"
          onClick={onRestart}
          bgColor="bg-white"
        />
      </div>
    </div>
  );
};

export default CompletePage;
