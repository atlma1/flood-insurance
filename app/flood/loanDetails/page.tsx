"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import Image from "next/image";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { useFormikContext, FormikValues } from "formik";

const LoanDetailsPage = () => {
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const router = useRouter();

  const addLienAmount = () => {
    if (!values.loanDetails.superiorLieans) {
      setFieldValue("loanDetails.superiorLieans", [0]);
      return;
    }
    const newLienAmount = [...values.loanDetails.superiorLieans];
    newLienAmount.push(0);
    setFieldValue("loanDetails.superiorLieans", newLienAmount);
  };

  const removeLienAmount = (index: number) => {
    const newLienAmount = [...values.loanDetails.superiorLieans];
    newLienAmount.splice(index, 1);
    setFieldValue("loanDetails.superiorLieans", newLienAmount);
  }

  const onContinue = () => {
    router.push("./requiredCoverage");
  };

  return (
    <div>
      <Title title="Enter loan details" />
      <NumberInput
        label="Loan amount"
        value={values.loanDetails.loanAmount}
        setValue={(value) => setFieldValue("loanDetails.loanAmount", value)}
        unit="USD"
        styles="mt-[53px]"
      />
      {values.loanDetails.superiorLieans?.map(
        (amount: number, index: number) => (
          <div className="relative" key={index}>
            <NumberInput
              key={index}
              label={`${index + 1}. Superior lien amount ${
                index == 0 ? "(if applicable)" : ""
              }`}
              value={amount}
              setValue={(value) => {
                const newLienAmount = [...values.loanDetails.superiorLieans];
                newLienAmount[index] = value;
                setFieldValue("loanDetails.superiorLieans", newLienAmount);
              }}
              unit="USD"
              styles="mt-[44px]"
            />
            <button className="absolute top-[93px] -left-[35px]"
            onClick={() => removeLienAmount(index)}
            >
              <Image
                src="/icons/trashIcon.svg"
                alt="trash"
                width={20}
                height={20}
              />
            </button>
          </div>
        )
      )}
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
      {!errors.loanDetails && (
        <Button label="Continue" onClick={onContinue} styles="mt-[49px]" />
      )}
    </div>
  );
};

export default LoanDetailsPage;
