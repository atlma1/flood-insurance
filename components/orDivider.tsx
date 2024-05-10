import { FC } from "react";
import Label from "./label";

interface OrDividerProps {
  height?: string;
}

const OrDivider:FC<OrDividerProps> = ({height}) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className={`w-[2px] ${height ? height : "h-[116px]"} bg-white`} />
        <Label label="Or" />
        <div className={`w-[2px] ${height ? height : "h-[116px]"} bg-white`} />
      </div>
    );
}

export default OrDivider;