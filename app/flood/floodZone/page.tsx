"use client";
import { useEffect, useState } from "react";
import Dropdown from "../../../components/dropdown";
import Title from "../../../components/title";
import SearchInput from "../../../components/flood/floodZone/searchInput";
import OrDivider from "../../../components/orDivider";
import Button from "../../../components/button";
import { useRouter } from "next/navigation";

const FloodZonePage = () => {
  const options = ["A", "AE", "VE"];
  const [floodZone, setFloodZone] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (floodZone != "") {
      setTouched(true);
    }
  }, [floodZone]);

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
            selected={floodZone}
            setSelected={setFloodZone}
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
            setTouched(true);
          }}
        />
      </div>
      {touched && (
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
