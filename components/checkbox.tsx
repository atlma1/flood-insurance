import { FC } from "react";
import Label from "./label";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-[36px] w-[36px] bg-background rounded-[10px]"
      />
      <Label label={label} styles="ml-[12px]" />
    </div>
  );
};
export default Checkbox;