"use client";
import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import SearchInput from "../../../components/flood/floodZone/searchInput";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { FormikValues, useFormikContext } from "formik";

const FloodZonePage = () => {
  const options = [
    "A",
    "AO",
    "AH",
    "A1-A30",
    "AE",
    "A99",
    "AR",
    "AR/AE",
    "AR/AO",
    "AR/A1-A30",
    "AR/A",
    "V",
    "VE",
    "V1-V30",
    "B",
    "X_shaded",
    "C",
    "X",
  ];
  const {values, setFieldValue, errors} = useFormikContext<FormikValues>();
  const router = useRouter();

  const handleContinue = () => {
    router.push("./unitSelect");
  };

  return (
    <div className="flex flex-col">
      <Title title="Enter your flood zone" />
      <div className="flex flex-row justify-center mt-[70px] gap-[26px]">
        <div>
          <Dropdown
            options={options}
            selected={values.floodZone}
            setSelected={(value) => setFieldValue("floodZone", value)}
            placeholder="Select flood zone"
            label="Flood zone"
          />
        </div>
        <OrDivider />
        <SearchInput
          placeholder="Enter address"
          label="Search address"
          onSearch={(value) => {
            console.log(value);
          }}
        />
      </div>
      {!errors.floodZone && (
        <div className="w-[100%] flex justify-center">
          <Button
            label="Continue"
            onClick={handleContinue}
            styles="mt-[70px]"
          />
        </div>
      )}
    </div>
  );
};
export default FloodZonePage;
