import Label from "./label";

interface DateSelectorProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  label?: string;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  value,
  setValue,
  placeholder,
  label,
}) => {
  return (
    <div className="">
      {label && <Label label={label} />}
      <div
        className={`flex flex-row items-center rounded-[17px] w-[180px] h-[70px] py-[12px] pl-[14px] mt-[10px] bg-background`}
      >
        {/* <Image
        src={
          value != ""
            ? "/icons/calendarFilledIcon.svg"
            : "/icons/calendarUnfilledIcon.svg"
        }
        alt="search"
        height={17}
        width={17}
      /> */}
        <input
          value={value}
          type="date"
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={` placeholder-unfilled bg-transparent h-[100%] w-[86%] font-inter outline-none text-white text-[20px] }`}
        />
      </div>
    </div>
  );
};

export default DateSelector;
