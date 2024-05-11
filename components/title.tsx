import { FC } from "react";

interface TitleProps {
  title: string;
  style?: string;
}

const Title:FC<TitleProps> = ({ title, style }) => {
  return (
    <h1 className={` font-inter font-semibold text-[36px] mt-[183px] ${style}`}>
      {title}
    </h1>
  );
};

export default Title;
