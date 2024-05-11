"use client";

import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import NumberInput from "../../../components/numberInput";
import DateSelectors from "../../../components/dateSelectors";
import { useRouter } from "next/navigation";
import Button from "../../../components/button";
import { useFormikContext, FormikValues } from "formik";

const RequiredCoveragePage = () => {
  const policyOptions = ["NFIP Policy", "Private Policy"];
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const router = useRouter();

  const onContinue = () => {
    router.push("./insuranceProviders");
  };

  return (
    <div>
      <Title title="The required coverage amount is" style="mt-[100px]" />
      <p className="text-lime font-inter text-[90px] font-semibold">$250,000</p>
      <p className="text-[38px] font-inter ">Enter policy details</p>
      <div className="gap-[35px] flex flex-col">
        <Dropdown
          label="Type of policy obtained"
          options={policyOptions}
          selected={values.policyDetails.typeOfCoverage}
          setSelected={(value) =>
            setFieldValue("policyDetails.typeOfCoverage", value)
          }
          placeholder="Select policy type"
          styles="mt-[41px]"
        />
        <NumberInput
          label="Coverage amount"
          value={values.policyDetails.coverageAmount}
          setValue={(value) =>
            setFieldValue("policyDetails.coverageAmount", value)
          }
          unit="USD"
        />
        <DateSelectors
          startDate={values.policyDetails.startDate}
          setStartDate={(value) =>
            setFieldValue("policyDetails.startDate", value)
          }
          endDate={values.policyDetails.endDate}
          setEndDate={(value) => setFieldValue("policyDetails.endDate", value)}
          label="Coverage dates"
        />
        {values.policyDetails.typeOfCoverage != "" &&
          values.policyDetails.coverageAmount != 0 &&
          values.policyDetails.startDate != "" &&
          values.policyDetails.endDate != "" && (
            <Button label="Continue" onClick={onContinue} />
          )}
      </div>
    </div>
  );
};

export default RequiredCoveragePage;
