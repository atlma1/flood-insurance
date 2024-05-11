import { FC } from "react";
import Label from "./label";
import Image from "next/image";

interface CheckboxProps {
  label: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, setChecked }) => {
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex items-center">
      <button
        className="w-[36px] h-[36px] bg-background rounded-[10px] flex items-center justify-center "
        onClick={onChange}
      >
        {checked && (
          <Image
            src="/icons/checkIcon.svg"
            alt="check"
            width={24}
            height={24}
          />
        )}
      </button>
      <Label label={label} styles="ml-[12px]" />
    </div>
  );
};
export default Checkbox;
