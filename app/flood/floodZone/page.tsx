"use client";
import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import SearchInput from "../../../components/flood/floodZone/searchInput";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";
import { FormikValues, useFormikContext } from "formik";
import Image from "next/image";

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
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const router = useRouter();

  const addFloodZone = () => {
    if (!values.FEMA) {
      setFieldValue("FEMA", [{ floodZone: "", address: "" }]);
      return;
    }
    const newFloodZones = [...values.FEMA];
    newFloodZones.push({ floodZone: "", address: "" });
    setFieldValue("FEMA", newFloodZones);
  };

  const removeFloodZone = (index: number) => {
    const newFloodZones = [...values.FEMA];
    newFloodZones.splice(index, 1);
    setFieldValue("FEMA", newFloodZones);
  };

  const handleContinue = () => {
    router.push("./unitSelect");
  };

  // Calculate height for the OrDivider based on number of entries
  const calculateOrDividerHeight = () => {
    const baseHeight = 200; // Base height in pixels
    const entriesCount = values.FEMA?.length || 1;
    const additionalHeight = (entriesCount - 1) * 120; // Additional height per entry
    return baseHeight + additionalHeight;
  };

  return (
    <div className="flex flex-col">
      <Title title="Enter your flood zone" />

      <div className="flex flex-row justify-center mt-[30px] gap-[26px]">
        {/* Left column - Flood Zone Dropdowns */}
        <div className="flex flex-col gap-[40px]">
          {values.FEMA?.map((item: any, index: number) => (
            <div key={`zone-${index}`} className="relative">
              <Dropdown
                options={options}
                selected={item.floodZone}
                setSelected={(value) => {
                  const newFloodZones = [...values.FEMA];
                  newFloodZones[index].floodZone = value;
                  setFieldValue("FEMA", newFloodZones);
                }}
                placeholder="Select flood zone"
                label={`Flood zone (Building #${index + 1})`}
              />
              {values.FEMA.length > 1 && (
                <button
                  className="absolute top-[90px] -left-[35px]"
                  onClick={() => removeFloodZone(index)}
                >
                  <Image
                    src="/icons/trashIcon.svg"
                    alt="trash"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Center - OR Divider with inline style for height */}
        <div className="flex items-center">
          <OrDivider />
        </div>

        {/* Right column - Address Search Inputs */}
        <div className="flex flex-col gap-[40px]">
          {values.FEMA?.map((item: any, index: number) => (
            <div key={`address-${index}`} className="mb-[5px]">
              <SearchInput
                placeholder="Enter address"
                label={`Address (Building #${index + 1})`}
                onSearch={(value) => {
                  const newFloodZones = [...values.FEMA];
                  newFloodZones[index].address = value;
                  setFieldValue("FEMA", newFloodZones);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="flex flex-row gap-[5px] items-center mt-[20px] justify-center"
        onClick={addFloodZone}
      >
        <Image
          src="/icons/circlePlusGreen.svg"
          alt="plus"
          width={20}
          height={20}
        />
        <p className="text-lime font-inter font-normal text-[15px]">
          add another building
        </p>
      </button>

      {!errors.floodZone && values.FEMA?.length > 0 && (
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
export default FloodZonePage;
