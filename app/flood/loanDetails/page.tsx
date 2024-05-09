"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import Image from "next/image";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const loanDetailsPage = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [lienAmount, setLienAmount] = useState<number[]>([0]);
  const router = useRouter();

  const addLienAmount = () => {
    const newLienAmount = [...lienAmount];
    newLienAmount.push(0);
    setLienAmount(newLienAmount);
  };

  const onContinue = () => {
    router.push("./requiredCoverage");
  };

  return (
    <div>
      <Title title="Enter loan details" />
      <NumberInput
        label="Loan amount"
        value={loanAmount}
        setValue={setLoanAmount}
        unit="USD"
        styles="mt-[53px]"
      />
      {lienAmount.map((amount, index) => (
        <NumberInput
          key={index}
          label={`Superior lien amount ${index == 0 ? "(if applicable)" : ""}`}
          value={amount}
          setValue={(value) => {
            const newLienAmount = [...lienAmount];
            newLienAmount[index] = value;
            setLienAmount(newLienAmount);
          }}
          unit="USD"
          styles="mt-[44px]"
        />
      ))}
      <button
        className="flex flex-row gap-[5px] items-center mt-[13px]"
        onClick={addLienAmount}
      >
        <Image
          src="/icons/circlePlusGreen.svg"
          alt="plus"
          width={20}
          height={20}
        />
        <p className="text-lime font-inter font-normal text-[15px]">
          add another
        </p>
      </button>
      {loanAmount > 0 && (
        <Button label="Continue" onClick={onContinue} styles="mt-[49px]" />
      )}
    </div>
  );
};

export default loanDetailsPage;
