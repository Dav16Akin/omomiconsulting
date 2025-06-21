import Image from "next/image";
import React from "react";

const StrategySection = ({
  header,
  content,
  image,
}: {
  header: string;
  content: string;
  image: string;
}) => {
  return (
    <div className="flex gap-6 items-start">
      <Image src={image} alt={header} height={40} width={40} className="lg:w-16 lg:h-16"/>
      <div className="space-y-4">
        <h1 className="text-[20px] lg:text-2xl">{header}</h1>
        <p className="text-text lg:text-[20px]">{content}</p>
      </div>
    </div>
  );
};

export default StrategySection;
