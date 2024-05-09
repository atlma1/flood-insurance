"use client";

import { useState } from "react";
import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import NumberInput from "../../../components/numberInput";
import DateSelectors from "../../../components/flood/requiredCoverage/dateSelectors";
import { useRouter } from "next/navigation";
import Button from "../../../components/button";

const RequiredCoveragePage = () => {
  const policyOptions = ["NFIP Policy", "Private Policy"];
  const [policyType, setPolicyType] = useState<string>("");
  const [coverageAmount, setCoverageAmount] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const router = useRouter();

  const onContinue = () => {
    router.push("./complete");
  };

  return (
    <div>
      <Title title="The required coverage amount is" />
      <p className="text-lime font-inter text-[90px] font-semibold">$250,000</p>
      <p className="text-[38px] font-inter ">Enter policy details</p>
      <div className="gap-[35px] flex flex-col">
        <Dropdown
          label="Type of policy obtained"
          options={policyOptions}
          selected={policyType}
          setSelected={setPolicyType}
          placeholder="Select policy type"
          styles="mt-[41px]"
        />
        <NumberInput
          label="Coverage amount"
          value={coverageAmount}
          setValue={setCoverageAmount}
          unit="USD"
        />
        <DateSelectors
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          label="Coverage dates"
        />
        {policyType != "" &&
          coverageAmount != 0 &&
          startDate != "" &&
          endDate != "" && <Button label="Continue" onClick={onContinue} />}
      </div>
    </div>
  );
};

export default RequiredCoveragePage;
