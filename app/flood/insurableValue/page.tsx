"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import Dropdown from "../../../components/dropdown";

const InsurableValuePage = () => {
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [landValue, setLandValue] = useState<number>(0);
  const [replacementCost, setReplacementCost] = useState<number>(0);
  const [agentProvidedInsurableValue, setAgentProvidedInsurableValue] =
    useState<number>(0);
  const [replacementCostOrAgentProvided, setReplacementCostOrAgentProvided] =
    useState<string>("Replacement cost");
  const occupanyStatusOptions = [
    "Owner occupied",
    "Rented",
    "Vacant",
    "N/A",
    "Other",
  ];
  const [occupancyStatus, setOccupancyStatus] = useState<string>("");
  const router = useRouter();

  const onContinue = () => {
    router.push("./loanDetails");
  };

  const onAgentProvidedInsurableValue = () => {
    if (replacementCostOrAgentProvided === "Replacement cost") {
      setReplacementCost(0);
      setReplacementCostOrAgentProvided("Agent provided insurable value");
    } else {
      setAgentProvidedInsurableValue(0);
      setReplacementCostOrAgentProvided("Replacement cost");
    }
  };

  return (
    <div>
      <Title title="Enter insurable value details" />
      <div className="flex flex-row justify-center mt-[71px] gap-[68px]">
        <div>
          <NumberInput
            label="Total appraisal value"
            value={estimatedCost}
            setValue={setEstimatedCost}
            unit="USD"
          />
          <NumberInput
            label="Appriased land value"
            value={landValue}
            setValue={setLandValue}
            unit="USD"
            styles="mt-[44px]"
          />
          <Dropdown
            label="Occupancy status"
            placeholder="Select occupancy status"
            options={occupanyStatusOptions}
            selected={occupancyStatus}
            setSelected={setOccupancyStatus}
            styles="mt-[44px]"
          />
        </div>
        <OrDivider height="h-[178px]" />
        <div>
          <NumberInput
            label={replacementCostOrAgentProvided}
            value={
              replacementCostOrAgentProvided === "Replacement cost"
                ? replacementCost
                : agentProvidedInsurableValue
            }
            setValue={
              replacementCostOrAgentProvided === "Replacement cost"
                ? setReplacementCost
                : setAgentProvidedInsurableValue
            }
            unit="USD"
          />
          <button onClick={onAgentProvidedInsurableValue}>
            <p className=" font-inter font-normal text-lime underline mt-[13px]">
              Use agent provided insurable value instead
            </p>
          </button>
          <Dropdown
            label="Occupancy status"
            placeholder="Select occupancy status"
            options={occupanyStatusOptions}
            selected={occupancyStatus}
            setSelected={setOccupancyStatus}
            styles="mt-[44px]"
          />
          
        </div>
      </div>
      {((estimatedCost > 0 && landValue > 0) ||
        replacementCost > 0 ||
        agentProvidedInsurableValue > 0) &&
        occupancyStatus != "" && (
          <div className="flex justify-center">
            <Button label="Continue" styles="mt-[49px]" onClick={onContinue} />
          </div>
        )}
    </div>
  );
};
export default InsurableValuePage;
