import { FC } from "react";

interface LabelProps {
  label: string;
  styles?: string;
}

const SecondaryLabel: FC<LabelProps> = ({ label, styles }) => {
  return (
    <p className={` font-inter font-normal text-[30px] ${styles}`}>{label}</p>
  );
};

export default SecondaryLabel;
