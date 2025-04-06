import { FC } from "react";
import Label from "./label";

interface InputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  label?: string;
  styles?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  setValue,
  label,
  styles,
}) => {
  return (
    <div>
      {label && <Label label={label} />}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`flex flex-row items-center rounded-[17px] w-[300px] h-[70px] py-[12px] pl-[14px] bg-background text-[36px] ${
          value == "" ? "text-unfilled" : "text-white"
        } ${styles} ${label ? "mt-[13px]" : ""}`}
      />
    </div>
  );
};

export default Input;
