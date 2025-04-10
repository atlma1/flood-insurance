import { FC } from "react";
import Label from "./label";

interface DropdownProps {
  options: string[];
  selected: string;
  setSelected: (option: string) => void;
  placeholder: string;
  label?: string;
  styles?: string;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  selected,
  setSelected,
  placeholder,
  label,
  styles,
}) => {
  return (
    <div className={`${styles}`}>
      {label && <Label label={label} styles="whitespace-nowrap" />}
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className={`flex flex-row items-center rounded-[17px] w-[350px] h-[70px] outline-none text-[36px] py-[12px] px-[12px] bg-background ${
          selected == "" ? "text-unfilled" : "text-white"
        } ${label ? "mt-[13px]" : ""}`}
      >
        <option value="" disabled={!selected}>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
