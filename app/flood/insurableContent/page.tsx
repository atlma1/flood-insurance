"use client";
import { useFormikContext, FormikValues } from "formik";
import NumberInput from "../../../components/numberInput";
import Title from "../../../components/title";
import DateSelectors from "../../../components/dateSelectors";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const InsurableContentPage = () => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const router = useRouter();
  const onContinue = () => {
    router.push("./loanDetails");
  };

  return (
    <div className="flex flex-col gap-[44px]">
      <Title title="Enter insurable content details" />
      <NumberInput
        label="Coverage amount"
        value={values.contentInsurance.contentCoverageAmount}
        setValue={(value) =>
          setFieldValue("contentInsurance.contentCoverageAmount", value)
        }
        unit="USD"
      />
      <DateSelectors
        startDate={values.contentInsurance.contentCoverageStartDate}
        endDate={values.contentInsurance.contentCoverageEndDate}
        setStartDate={(value) =>
          setFieldValue("contentInsurance.contentCoverageStartDate", value)
        }
        setEndDate={(value) =>
          setFieldValue("contentInsurance.contentCoverageEndDate", value)
        }
      />
      {values.contentInsurance.contentCoverageAmount > 0 &&
        values.contentInsurance.contentCoverageStartDate &&
        values.contentInsurance.contentCoverageEndDate && (
          <Button onClick={onContinue} label="Continue" />
        )}
    </div>
  );
};

export default InsurableContentPage;
