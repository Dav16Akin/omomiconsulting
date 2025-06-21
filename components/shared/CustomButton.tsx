import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ButtonProps } from "@/types";

const CustomButton = ({ text, arrow, type, isLoading, classname }: ButtonProps) => {
  return (
    <div className={`relative ${classname} cursor-pointer`}>
      <Image
        src="/assets/images/button-bg-pattern.jpg"
        alt="button bg"
        fill
        className="absolute inset-0 object-cover opacity-10 rounded-full pointer-events-none"
      />

      <Button disabled={isLoading} type={type === "submit" ? "submit" : undefined} className={`bg-redish hover:bg-red-900 rounded-full ${classname} font-semibold text-lg py-4 px-5 flex gap-2`}>
      {isLoading ? "Loading..." : (
        <>
          <span>{text}</span>
          {arrow && (
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow-icon"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          )}
        </>
      )}
      </Button>
    </div>
  );
};

export default CustomButton;
