import Label from "./label";

const OrDivider = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="w-[2px] h-[116px] bg-white" />
        <Label label="Or" />
        <div className="w-[2px] h-[116px] bg-white" />
      </div>
    );
}

export default OrDivider;