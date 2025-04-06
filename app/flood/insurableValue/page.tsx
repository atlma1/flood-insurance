"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { useFormikContext, FormikValues } from "formik";
import Checkbox from "../../../components/checkbox";
import Label from "../../../components/label";

const InsurableValuePage = () => {
  const [replacementCostOrAgentProvided, setReplacementCostOrAgentProvided] =
    useState<string>("Replacement cost per appraisal");
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  const router = useRouter();
  const [contentInsured, setContentInsured] = useState<boolean>(false);
  

  const onContinue = () => {
    if (contentInsured) {
      router.push("./insurableContent");
    } else {
      router.push("./loanDetails");
    }
  };

  const onAgentProvidedInsurableValue = () => {
    if (replacementCostOrAgentProvided === "Replacement cost per appraisal") {
      setFieldValue("hazardPolicyReplacementCost", 0);
      setReplacementCostOrAgentProvided("Agent provided insurable value");
    } else {
      setFieldValue("hazardPolicyReplacementCost", 0);
      setReplacementCostOrAgentProvided("Replacement cost per appraisal");
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="ml-[10%]">
        <Title title="Enter insurable value details" />
        <div className="flex flex-row justify-center mt-[71px] gap-[68px]">
          <div className="gap-[44px] flex flex-col">
            <NumberInput
              label="Total appraisal value"
              labelLine2="(if new construction)"
              value={values.insurableValue.totalAppraisalValue}
              setValue={(value) =>
                setFieldValue("insurableValue.totalAppraisalValue", value)
              }
              unit="USD"
            />
            <NumberInput
              label="Minus appriasal land value"
              value={values.insurableValue.appraisedLandValue}
              setValue={(value) =>
                setFieldValue("insurableValue.appraisedLandValue", value)
              }
              unit="USD"
            />
            <Checkbox
              label="Content insured?"
              checked={contentInsured}
              setChecked={setContentInsured}
            />
            <div className="flex flex-col gap-[10px]">
              <Label label="Total Calculated Appraisal value" />
              <div
                className={`flex flex-row items-center rounded-[17px] w-[246px] h-[70px] py-[12px] pl-[14px] bg-background`}
              >
                <Label
                  label={`$ ${(
                    values.insurableValue.totalAppraisalValue -
                    values.insurableValue.appraisedLandValue
                  ).toLocaleString()}`}
                />
              </div>
            </div>
          </div>
          <OrDivider height="h-[178px]" />
          <div className="gap-[44px] flex flex-col">
            <div>
              <NumberInput
                label={"Replacement cost / Insurable value"}
                value={values.insurableValue.hazardPolicyReplacementCost}
                setValue={(value) =>
                  setFieldValue(
                    "insurableValue.hazardPolicyReplacementCost",
                    value
                  )
                }
                unit="USD"
              />
              <p className=" font-inter font-normal text-lime mt-[13px] text-[26px] text-start">
                If replacement cost value is unavailable,
                <br />
                use current insurance certificates replacement cost value
                <br />
              </p>
              {/* <button onClick={onAgentProvidedInsurableValue}>
              
            </button> */}
            </div>

            <Checkbox
              label="Content insured?"
              checked={contentInsured}
              setChecked={setContentInsured}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-[49px]">
        {((values.insurableValue.totalAppraisalValue > 0 ||
          values.insurableValue.appraisedLandValue > 0) ||
          values.insurableValue.hazardPolicyReplacementCost > 0 ||
          values.insurableValue.agentProvidedInsurableValue > 0) && (
          <Button label="Continue" onClick={onContinue} />
        )}
      </div>
    </div>
  );
};
export default InsurableValuePage;
