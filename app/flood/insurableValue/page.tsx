"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const InsurableValuePage = () => {
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [landValue, setLandValue] = useState<number>(0);
  const [replacementCost, setReplacementCost] = useState<number>(0);
  const router = useRouter();

  const onContinue = () => {
    router.push("./loanDetails");
  };

  return (
    <div>
      <Title title="Enter insurable value details" />
      <div className="flex flex-row justify-center mt-[71px] gap-[68px]">
        <div>
          <NumberInput
            label="Total estimated cost"
            value={estimatedCost}
            setValue={setEstimatedCost}
            unit="USD"
          />
          <NumberInput
            label="Land value"
            value={landValue}
            setValue={setLandValue}
            unit="USD"
            styles="mt-[44px]"
          />
        </div>
        <OrDivider />
        <NumberInput
          label="Replacement cost"
          value={replacementCost}
          setValue={setReplacementCost}
          unit="USD"
        />
      </div>
      {((estimatedCost > 0 && landValue > 0) ||
        replacementCost > 0) && (
          <div className="flex justify-center">
            <Button label="Continue" styles="mt-[49px]" onClick={onContinue} />
          </div>
        )}
    </div>
  );
};
export default InsurableValuePage;
