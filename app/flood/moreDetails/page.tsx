"use client";
import { useFormikContext, FormikValues } from "formik";
import DateSelector from "../../../components/dateSelector";
import Title from "../../../components/title";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const MoreDetailsPage = () => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const router = useRouter();

  const onContinue = () => {
    router.push("./complete");
  };
  return (
    <div>
      <Title title="Enter more details on your policy" />
      <div className="mt-[44px] gap-[44px] flex flex-col">
        <DateSelector
          value={values.morePolicyDetails.closingDate}
          setValue={(value) =>
            setFieldValue("morePolicyDetails.closingDate", value)
          }
          placeholder="Start date"
          label="Start date"
        />
        <Input
          label="Applicant name"
          value={values.morePolicyDetails.applicantName}
          setValue={(value) =>
            setFieldValue("morePolicyDetails.applicantName", value)
          }
          placeholder="Tyler Ma"
        />
        <Input
          label="Prepared by"
          value={values.morePolicyDetails.preparedBy}
          setValue={(value) =>
            setFieldValue("morePolicyDetails.preparedBy", value)
          }
          placeholder="You"
        />
        <Input
          label="Account or application number"
          value={values.morePolicyDetails.accountNumber}
          setValue={(value) =>
            setFieldValue("morePolicyDetails.accountNumber", value)
          }
          placeholder="1234"
        />
      </div>
      {values.morePolicyDetails.closingDate != "" &&
        values.morePolicyDetails.applicantName != "" &&
        values.morePolicyDetails.preparedBy != "" &&
        values.morePolicyDetails.accountNumber != "" && (
          <Button label="Continue" onClick={onContinue} styles="mt-[44px]" />
        )}
    </div>
  );
};

export default MoreDetailsPage;
