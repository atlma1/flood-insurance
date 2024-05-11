import { FC } from "react";
import Image from "next/image";

interface ProviderProps {
  name: string;
  image: string;
  onClick: () => void;
  saved: boolean;
}

const Provider: FC<ProviderProps> = ({ name, image, onClick, saved }) => {
  return (
    <button
      className="relative flex justify-center w-[175px] h-[175px] rounded-[12px] bg-background"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="mt-[20px]"
      />
      <div className="absolute bottom-[10px] flex flex-row justify-between w-[90%]">
        <p className="text-white font-inter font-medium text-[17px]">{name}</p>
        <Image
          src={saved ? "/icons/heartFilled.svg" : "/icons/heartIcon.svg"}
          alt="save"
          width={20}
          height={20}
        />
      </div>
    </button>
  );
};

export default Provider;
