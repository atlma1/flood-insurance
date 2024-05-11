"use client";
import { useState } from "react";
import Input from "../../../components/input";
import Image from "next/image";
import Provider from "../../../components/flood/insuranceProviders/provider";
import { useRouter } from "next/navigation";
import { useFormikContext, FormikValues } from "formik";

const InsuranceProvidersPage = () => {
  const [searchquery, setSearchQuery] = useState<string>("");
  const { setFieldValue } = useFormikContext<FormikValues>();
  const router = useRouter();
  const providers = [
    "Allied Trust",
    "Allied Trust",
    "Allied Trust",
    "Allied Trust",
    "Allied Trust",
  ];

  const onContinue = (value: string) => {
    setFieldValue("floodInsuranceCarrier", value);
    router.push("./moreDetails");
  };

  return (
    <div className="bg-background w-[610px] h-[812px] rounded-[19px] mt-[50px] px-[25px] pt-[25px]">
      <p className="text-[29px] font-inter font-semibold text-white">
        Insurance Providers
      </p>
      <div className="bg-dark w-[550px] h-[50px] rounded-[12px] flex flex-row justify-between items-center px-[20px] mt-[6px]">
        <input
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search providers"
          className={` bg-transparent 
          ${searchquery == "" ? "text-unfilled" : "text-white"}`}
        />
        <Image
          src="/icons/searchIconMedium.svg"
          alt="search"
          width={20}
          height={20}
        />
      </div>
      <div className="grid grid-cols-3 gap-[13px] mt-[30px]">
        {providers.map((provider, index) => (
          <div key={index}>
            <Provider
              name={provider}
              image={"/images/" + provider.replace(" ", "") + ".png"}
              onClick={() => onContinue(provider)}
              saved={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default InsuranceProvidersPage;
