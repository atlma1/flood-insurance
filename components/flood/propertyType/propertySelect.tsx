"use client";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormikContext } from "formik";

interface PropertySelectProps {
  name: string;
  icon: string;
}

const PropertySelect: FC<PropertySelectProps> = ({ name, icon }) => {
  const router = useRouter();
  const {values, setFieldValue } = useFormikContext();

  const onClick = () => {
    setFieldValue("propertyType", name);
    router.push("./floodZone");
  };

  return (
    <button
      onClick={onClick}
      className="bg-background flex items-center justify-center flex-col px-[61px] pb-[29px] pt-[76px] rounded-[19px]"
    >
      <Image src={icon} alt={name} width={74} height={74} />
      <p className="mt-[46px] font-inter font-normal text-[30px]">{name}</p>
    </button>
  );
};

export default PropertySelect;
