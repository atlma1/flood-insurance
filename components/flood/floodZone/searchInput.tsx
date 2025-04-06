"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Label from "../../label";

interface SearchInputProps {
  placeholder: string;
  onSearch: (value: string) => void;
  label?: string;
  styles?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  onSearch,
  label,
  styles,
}) => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      {label && <Label label={label} />}
      <div
        className={`flex flex-row items-center rounded-[17px] w-[400px] h-[7-px] py-[12px] pl-[14px] mt-[13px] bg-background ${
          label ? "mt-[13px]" : ""
        } ${styles}`}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={` placeholder-unfilled bg-transparent h-[100%] w-[86%] font-inter outline-none text-white text-[36px]
        }`}
        />
        <button onClick={() => onSearch(value)}>
          <Image
            src="/icons/searchIcon.svg"
            alt="search"
            height={17}
            width={17}
            onClick={() => onSearch(value)}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
