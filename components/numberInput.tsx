import { FC } from "react";
import Label from "./label";
import Image from "next/image";

interface NumberInputProps {
  label?: string;
  value: number;
  unit?: string;
  setValue: (value: number) => void;
  styles?: string;
}

const NumberInput: FC<NumberInputProps> = ({
  label,
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
        setValue(value + 1);
      }
    }
  };

  return (
    <div className={styles}>
      {label && <Label label={label} />}
      <div
        className={`flex flex-row items-center rounded-[17px] w-[246px] h-[53px] py-[12px] pl-[14px] mt-[13px] bg-background ${
          label ? "mt-[13px]" : ""
        } `}
      >
        <input
          value={`${unit == 'USD' ? '$' : ''}${value.toLocaleString()}`}
          className={` placeholder-unfilled bg-transparent h-[100%] w-[86%] font-inter outline-none text-white
        }`}
          onChange={(e) => {
            // Filter out non-numeric input
            const newValue = e.target.value;
            if (/^\d*$/.test(newValue)) {
              // Regular expression to allow only digits
              setValue(Number(newValue));
            }
          }}
        />
        {/* {unit && <span className="ml-2 text-white">{unit}</span>}{" "} */}
        <div>
          <button onClick={(e) => increment(e)}>
            <Image
              src="/icons/chevronIcon.svg"
              alt="increment"
              height={17}
              width={17}
              className="transform rotate-180"
            />
          </button>
          <button onClick={(e) => decrement(e)}>
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
