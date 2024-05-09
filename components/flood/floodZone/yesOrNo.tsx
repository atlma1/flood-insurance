"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Label from "../../label";

interface YesOrNoProps {
  type: "Yes" | "No";
  styles?: string;
  selected: number;
  setSelected: (selected: number) => void;
}

const YesOrNo: FC<YesOrNoProps> = ({ type, styles, selected, setSelected }) => {
    const yesEnabled = "/icons/circleCheckGreenIcon.svg";
    const yesDisabled = "/icons/circleCheckIcon.svg";
    const noEnabled = "/icons/circleXGreenIcon.svg";
    const noDisabled = "/icons/circleXIcon.svg";

    let icon, bgColor, textColor;

    if (selected === 0) {
      icon = type === "Yes" ? yesEnabled : noDisabled;
      bgColor = type === "Yes" ? "bg-limeBg" : "bg-background";
      textColor = type === "Yes" ? "text-lime" : "text-white";
    } else if (selected === 1) {
      icon = type === "Yes" ? yesDisabled : noEnabled;
      bgColor = type === "Yes" ? "bg-background" : "bg-limeBg";
      textColor = type === "Yes" ? "text-white" : "text-lime";
    } else {
      icon = type === "Yes" ? yesDisabled : noDisabled;
      bgColor = "bg-background";
      textColor = "text-white";
    }

  const handleClick = () => {
    if (type == "Yes") {
      setSelected(0);
    } else {
      setSelected(1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-row items-center rounded-[17px] ${bgColor} w-[246px] h-[53px] py-[10px] px-[14px] ${styles}`}
    >
      <Image src={icon} alt={type} width={26} height={26} />
      <Label label={type} styles={` ${textColor} ml-[17px]`} />
    </button>
  );
};

export default YesOrNo;
