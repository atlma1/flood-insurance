"use client";
import { useFormikContext, FormikValues } from "formik";
import Input from "../../../components/input";
import Title from "../../../components/title";
import { useRouter } from "next/navigation";
import DateSelector from "../../../components/dateSelector";
import YesOrNo from "../../../components/flood/floodZone/yesOrNo";
import { useState } from "react";
import Button from "../../../components/button";
import React from "react";
import Label from "../../../components/label";

const NFIPDetails = () => {
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const router = useRouter();
  const [yesOrNo, setYesOrNo] = useState<number>(
    values.NFIPDetails?.letterMapChange ? 0 : 1
  );

  const toggleYesOrNo = (selected: number) => {
    setYesOrNo(selected);
    setFieldValue("NFIPDetails.letterMapChange", selected === 0);
  };

  const handleContinue = () => {
    router.push("./unitSelect");
  };

  return (
    <div >
      <Title title="Enter NFIP details" style="mb-[39px]" />
      <Input
        label="NFIP map number"
        value={values.NFIPDetails?.NFIPMapNumber || ""}
        setValue={(value) => setFieldValue("NFIPDetails.NFIPMapNumber", value)}
        placeholder="ABCDEFG1234"
        styles="mb-[49px]"
      />
      <DateSelector
        value={values.NFIPDetails?.NFIPMapEffectiveDate || ""}
        setValue={(value) =>
          setFieldValue("NFIPDetails.NFIPMapEffectiveDate", value)
        }
        placeholder="Effective date"
        label="Effective date"        
      />
      <Label label="Is there a letter of map change?" styles="mt-[49px]" />
      <YesOrNo
        type={"Yes"}
        selected={yesOrNo}
        setSelected={toggleYesOrNo}
        styles="mt-[19px]"
      />
      <YesOrNo
        type={"No"}
        selected={yesOrNo}
        setSelected={toggleYesOrNo}
        styles="mt-[19px]"
      />
      {!errors.NFIPDetails && (
        <div className="w-[100%] flex justify-center">
          <Button
            label="Continue"
            onClick={handleContinue}
            styles="mt-[50px]"
          />
        </div>
      )}
    </div>
  );
};

export default NFIPDetails;
