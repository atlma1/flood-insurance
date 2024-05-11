import { FC } from "react";
import PropertySelect from "../../../components/flood/propertyType/propertySelect";
import Title from "../../../components/title";

const PropertyTypePage: FC = () => {
  return (
    <div className="flex items-center flex-col">
     <Title title="What type of property is this?" />
      <div className="flex flex-row gap-[56px] mt-[132px]">
        <PropertySelect name="Residential" icon="/icons/residentialIcon.svg" />
        <PropertySelect name="Commercial" icon="/icons/commercialIcon.svg" />
      </div>
    </div>
  );
};
export default PropertyTypePage;
