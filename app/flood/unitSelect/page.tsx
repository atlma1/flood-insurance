"use client";
import { useState } from "react";
import YesOrNo from "../../../components/flood/floodZone/yesOrNo";
import Title from "../../../components/title";
import Dropdown from "../../../components/dropdown";

const UnitSelectPage = () => {
  const options = ["Occupied", "Vacant", "Owner Occupied"];
  const [Occupied, setOccupied] = useState<string>("");
  const [yesOrNo, setYesOrNo] = useState<number>(-1);
  return (
    <div>
      <Title title="Is this a condo with multiple units?" />
      <YesOrNo
        type="Yes"
        styles="mt-[49px]"
        selected={yesOrNo}
        setSelected={setYesOrNo}
      />
      <YesOrNo
        type="No"
        styles="mt-[19px]"
        selected={yesOrNo}
        setSelected={setYesOrNo}
      />
      {yesOrNo != -1 && (
        <Dropdown
          options={options}
          selected={Occupied}
          setSelected={setOccupied}
          placeholder="Select occupancy status"
          label="Occupancy status"
          styles="mt-[49px]"
        />
      )}
    </div>
  );
};

export default UnitSelectPage;
