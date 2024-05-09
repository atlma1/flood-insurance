import { FC } from "react";

interface LabelProps {
  label: string;
  styles?: string;
}

const Label:FC<LabelProps> = ({ label, styles }) => {
  return (
    <p className={` font-inter font-normal text-[27px] ${styles}`}>{label}</p>
  );
};

export default Label;