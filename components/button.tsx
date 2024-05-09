import { FC } from "react";
import Image from "next/image";
import { text } from "stream/consumers";

interface ButtonProps {
  icon?: string;
  label: string;
  onClick: () => void;
  textColor?: string;
  bgColor?: string;
  styles?: string;
}

const Button: FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  textColor,
  bgColor,
  styles,
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center w-[193px] h-[58px] rounded-[27px] ${
        bgColor ? bgColor : "bg-lime"
      }  ${styles}`}
      onClick={onClick}
    >
      {icon && (
        <Image src={icon} alt="icon" height={24} width={24} className="mr-[14px]" />
      )}
      <p
        className={`${
          textColor ? textColor : "text-black"
        } font-inter font-semibold text-[23px]`}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
