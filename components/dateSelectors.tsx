import Label from "./label";
import Image from "next/image";
import dateSelectorsStyles from "./dateSelectors.module.css";
import DateSelector from "./dateSelector";

interface DateSelectors {
  startDate: string;
  setStartDate: (startDate: string) => void;
  endDate: string;
  setEndDate: (endDate: string) => void;
  label?: string;
  styles?: string;
}

const DateSelectors: React.FC<DateSelectors> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  label,
  styles,
}) => {
  return (
    <div className="flex flex-col ">
      {label && <Label label={label} />}
      <div className="flex flex-row gap-[20px] mt-[15px]">
        <div>
          <p className={`font-inter font-normal text-[20px]`}>Start Date</p>
          <DateSelector
            value={startDate}
            setValue={setStartDate}
            placeholder="Start Date"
          />
        </div>
        <div>
          <p className={`font-inter font-normal text-[20px]`}>End Date</p>
          <DateSelector
            value={endDate}
            setValue={setEndDate}
            placeholder="End Date"
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelectors;

