"use client";
import { useState } from "react";
import YesOrNo from "../../../components/flood/floodZone/yesOrNo";
import Title from "../../../components/title";
import Dropdown from "../../../components/dropdown";
import NumberInput from "../../../components/numberInput";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const UnitSelectPage = () => {
  const [yesOrNo, setYesOrNo] = useState<number>(-1);
  const [numberOfUnits, setNumberOfUnits] = useState<number>(0);
  const router = useRouter();

  const onContinue = () => {
    router.push("./insurableValue");
  };

  return (
    <div>
      <Title title="Is this a condo with multiple units?" />
      <YesOrNo
        type="Yes"
        styles="mt-[49px]"
        selected={yesOrNo}
        setSelected={setYesOrNo}
      />
      <YesOrNo
        type="No"
        styles="mt-[19px]"
        selected={yesOrNo}
        setSelected={setYesOrNo}
      />
      {yesOrNo == 0 && (
        <NumberInput
          label="Number of units"
          value={numberOfUnits}
          setValue={setNumberOfUnits}
          styles="mt-[49px]"
          unit="units"
        />
      )}
      {(yesOrNo == 1 || (yesOrNo == 0 && numberOfUnits > 0)) && (
        <Button label="Next" styles="mt-[49px]" onClick={onContinue} />
      )}
    </div>
  );
};

export default UnitSelectPage;
