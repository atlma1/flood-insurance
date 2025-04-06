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
  const router = useRouter();
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const [yesOrNo, setYesOrNo] = useState<number>(
    values.numberOfUnits > 0 ? 0 : 1
  );
    const occupanyStatusOptions = [
      "Owner occupied",
      "Rental",
      "Vacant",
      "N/A",
      "Other",
    ];

  const onContinue = () => {
    if (yesOrNo == 1) {
      setFieldValue("numberOfUnits", 0);
    }
    router.push("./insurableValue");
  };

  return (
    <div>
      <Title title="Is this a condo?" />
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
          styles="mt-[44px]"
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
