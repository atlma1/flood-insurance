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
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  textColor,
  bgColor,
  styles,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`flex flex-row items-center justify-center w-[170px] h-[51px] rounded-[27px] ${
        bgColor ? bgColor : "bg-lime"
      }  ${styles}`}
      onClick={onClick}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          height={18}
          width={21}
          className="mr-[14px]"
        />
      )}
      <p
        className={`${
          textColor ? textColor : "text-black"
        } font-inter font-semibold text-[20px]`}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
