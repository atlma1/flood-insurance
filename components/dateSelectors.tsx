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
      <div className="flex flex-row gap-[20px]">
        <DateSelector
          value={startDate}
          setValue={setStartDate}
          placeholder="Start Date"
        />
        <DateSelector
          value={endDate}
          setValue={setEndDate}
          placeholder="End Date"
        />
      </div>
    </div>
  );
};

export default DateSelectors;

