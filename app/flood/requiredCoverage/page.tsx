"use client";

import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import NumberInput from "../../../components/numberInput";
import DateSelectors from "../../../components/dateSelectors";
import { useRouter } from "next/navigation";
import Button from "../../../components/button";
import { useFormikContext, FormikValues } from "formik";
import { useEffect } from "react";
import { number } from "yup";

const RequiredCoveragePage = () => {
  const policyOptions = ["NFIP Policy", "Private Policy"];
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const router = useRouter();
  const initialCoverageAmount =
    values.propertyType == "Residential" ? 250000 : 500000;
  const requiredCoverageAmount =
    values.numberOfUnits > 1
      ? initialCoverageAmount * values.numberOfUnits
      : initialCoverageAmount;

  const onContinue = (coverageAmount: number) => {
    if (coverageAmount < requiredCoverageAmount) {
      alert(
        "The coverage amount must be greater than or equal to the NFIP required coverage amount"
      );
    } else {
      router.push("./insuranceProviders");
    }
  };

  console.log('errors', errors.policyDetails);

  return (
    <div>
      <Title title="The NFIP required coverage amount is" style="mt-[100px]" />
      <p className="text-lime font-inter text-[90px] font-semibold">
        {`$ ${requiredCoverageAmount.toLocaleString()}`}
      </p>
      <p className="text-[38px] font-inter ">Enter policy details</p>
      <div className="gap-[35px] flex flex-col">
        <Dropdown
          label="Borrower's type of policy obtained"
          options={policyOptions}
          selected={values.policyDetails.typeOfCoverage}
          setSelected={(value) => {
            setFieldValue("policyDetails.typeOfCoverage", value);
            if (value == "Private Policy") {
              alert(
                'A private policy must have the following statement in the policy or be sent to a consultant for review: "This policy meets the definition of private flood insurance contained in 42 U.S.C. 4012a(b)(7) and the corresponding regulation"'
              );
            }
          }}
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
          startDate={values.policyDetails.coverageStartDate}
          setStartDate={(value) =>
            setFieldValue("policyDetails.coverageStartDate", value)
          }
          endDate={values.policyDetails.coverageEndDate}
          setEndDate={(value) =>
            setFieldValue("policyDetails.coverageEndDate", value)
          }
          label="Coverage dates"
        />
        {!errors.policyDetails && (
          <Button
            label="Continue"
            onClick={() => onContinue(values.policyDetails.coverageAmount)}
          />
        )}
      </div>
    </div>
  );
};

export default RequiredCoveragePage;
