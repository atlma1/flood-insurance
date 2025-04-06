import { FC } from "react";
import Label from "./label";
import Image from "next/image";
import SecondaryLabel from "./secondaryLabel";

interface NumberInputProps {
  label?: string;
  labelLine2?: string;
  value: number;
  unit?: string;
  setValue: (value: number) => void;
  styles?: string;
}

const NumberInput: FC<NumberInputProps> = ({
  label,
  labelLine2,
  value,
  setValue,
  styles,
  unit,
}) => {
  const increment = (e: React.MouseEvent) => {
    if (unit === "USD") {
      if (e.shiftKey) {
        setValue(value + 100000);
      } else if (e.ctrlKey) {
        setValue(value + 10000);
      } else {
        setValue(value + 1000);
      }
    } else {
      setValue(value + 1);
    }
  };
  const decrement = (e: React.MouseEvent) => {
    if (value > 0) {
      if (unit === "USD") {
        if (e.shiftKey) {
          setValue(value - 100000);
        } else if (e.ctrlKey) {
          setValue(value - 10000);
        } else {
          setValue(value - 1000);
        }
      } else {
        setValue(value - 1);
      }
    }
  };

  return (
    <div className={` flex flex-col items-start ` + styles}>
      {label && <Label label={label} />}
      {labelLine2 && <SecondaryLabel label={labelLine2} />}
      <div
        className={`flex flex-row items-center rounded-[17px] w-[246px] h-[70px] py-[12px] pl-[14px] mt-[13px] bg-background ${
          label ? "mt-[13px]" : ""
        } `}
      >
        <input
          value={`${unit == "USD" ? "$" : ""}${
            value !== undefined ? value.toLocaleString() : ""
          }`}
          className={` placeholder-unfilled bg-transparent h-[100%] w-[86%] font-inter outline-none text-white text-[36px]
        }`}
          onChange={(e) => {
            // Filter out non-numeric input
            const newValue = e.target.value.replace(/[^0-9]/g, ""); // Strip all non-numeric characters
            setValue(parseInt(newValue) || 0); // Add || 0 to handle empty string cases
          }}
        />
        {/* {unit && <span className="ml-2 text-white">{unit}</span>}{" "} */}
        <div>
          <button onClick={(e) => increment(e)} className="p-2 -m-2">
            <Image
              src="/icons/chevronIcon.svg"
              alt="increment"
              height={17}
              width={17}
              className="transform rotate-180"
            />
          </button>
          <button onClick={(e) => decrement(e)} className="p-2 -m-2">
            <Image
              src="/icons/chevronIcon.svg"
              alt="decrement"
              height={17}
              width={17}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
