"use client";
import { useState } from "react";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { useFormikContext, FormikValues } from "formik";
import Checkbox from "../../../components/checkbox";

const InsurableValuePage = () => {
  const [replacementCostOrAgentProvided, setReplacementCostOrAgentProvided] =
    useState<string>("Replacement cost");
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
    if (replacementCostOrAgentProvided === "Replacement cost") {
      setFieldValue("hazardPolicyReplacementCost", 0);
      setReplacementCostOrAgentProvided("Agent provided insurable value");
    } else {
      setFieldValue("hazardPolicyReplacementCost", 0);
      setReplacementCostOrAgentProvided("Replacement cost");
    }
  };

  return (
    <div>
      <Title title="Enter insurable value details" />

      <div className="flex flex-row justify-center mt-[71px] gap-[68px]">
        <div className="gap-[44px] flex flex-col">
          <NumberInput
            label="Total appraisal value"
            value={values.insurableValue.totalAppraisalValue}
            setValue={(value) =>
              setFieldValue("insurableValue.totalAppraisalValue", value)
            }
            unit="USD"
          />
          <NumberInput
            label="Appriased land value"
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
        </div>
        <OrDivider height="h-[178px]" />
        <div className="gap-[44px] flex flex-col">
          <div>
            <NumberInput
              label={replacementCostOrAgentProvided}
              value={
                replacementCostOrAgentProvided === "Replacement cost"
                  ? values.insurableValue.hazardPolicyReplacementCost
                  : values.insurableValue.agentProvidedInsurableValue
              }
              setValue={
                replacementCostOrAgentProvided === "Replacement cost"
                  ? (value) =>
                      setFieldValue(
                        "insurableValue.hazardPolicyReplacementCost",
                        value
                      )
                  : (value) =>
                      setFieldValue(
                        "insurableValue.agentProvidedInsurableValue",
                        value
                      )
              }
              unit="USD"
            />
            <button onClick={onAgentProvidedInsurableValue}>
              <p className=" font-inter font-normal text-lime underline mt-[13px]">
                Use agent provided insurable value instead
              </p>
            </button>
          </div>

          <Checkbox
            label="Content insured?"
            checked={contentInsured}
            setChecked={setContentInsured}
          />
        </div>
      </div>
      {((values.insurableValue.totalAppraisalValue > 0 &&
        values.insurableValue.appraisedLandValue > 0) ||
        values.insurableValue.hazardPolicyReplacementCost > 0 ||
        values.insurableValue.agentProvidedInsurableValue > 0) && (
        <Button
          label="Continue"
          styles="mt-[49px] ml-[255px]"
          onClick={onContinue}
        />
      )}
    </div>
  );
};
export default InsurableValuePage;
