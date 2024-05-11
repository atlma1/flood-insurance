"use client";
import { useState } from "react";
import YesOrNo from "../../../components/flood/floodZone/yesOrNo";
import Title from "../../../components/title";
import NumberInput from "../../../components/numberInput";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { useFormikContext, FormikValues } from "formik";
import Dropdown from "../../../components/dropdown";

const UnitSelectPage = () => {
  const [yesOrNo, setYesOrNo] = useState<number>(-1);
  const router = useRouter();
  const { values, setFieldValue } = useFormikContext<FormikValues>();
    const occupanyStatusOptions = [
      "Owner occupied",
      "Rented",
      "Vacant",
      "N/A",
      "Other",
    ];

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
      <Dropdown
        label="Occupancy status"
        placeholder="Select occupancy status"
        options={occupanyStatusOptions}
        selected={values.occupancyStatus}
        setSelected={(value) =>
          setFieldValue("insurableValue.occupancyStatus", value)
        }
        styles="mt-[44px]"
      />
      {yesOrNo == 0 && (
        <NumberInput
          label="Number of units"
          value={values.numberOfUnits}
          setValue={(value) => setFieldValue("numberOfUnits", value)}
          styles="mt-[49px]"
          unit="units"
        />
      )}
      {(yesOrNo == 1 || (yesOrNo == 0 && values.numberOfUnits > 0)) && (
        <Button label="Next" styles="mt-[49px]" onClick={onContinue} />
      )}
    </div>
  );
};

export default UnitSelectPage;
