import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertySelectProps {
  name: string;
  icon: string;
}

const PropertySelect: FC<PropertySelectProps> = ({ name, icon }) => {
  return (
    <Link href="./floodZone" className="bg-background flex items-center justify-center flex-col px-[61px] pb-[29px] pt-[76px] rounded-[19px]">
      <Image src={icon} alt={name} width={74} height={74} />
      <p className="mt-[46px] font-inter font-normal text-[30px]">{name}</p>
    </Link>
  );
};

export default PropertySelect;
