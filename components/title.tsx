import { FC } from "react";

interface TitleProps {
  title: string;
}

const Title:FC<TitleProps> = ({ title }) => {
  return (
    <h1 className=" font-inter font-semibold text-[36px] mt-[183px]">
      {title}
    </h1>
  );
};

export default Title;
