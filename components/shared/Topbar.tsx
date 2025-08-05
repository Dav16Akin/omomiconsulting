"use client";

import { topbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  if (pathname === "/contact/success") return null;

  return (
    <>
      <div className="w-full mb-2 py-2 px-6 flex flex-row justify-between items-center border-b lg:border-0 topbar-border lg:h-20 h-[51px]">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            height={100}
            width={100}
            className="lg:w-2xs lg:h-14 object-contain"
          />
        </Link>

        <div className="hidden lg:flex lg:gap-8">
          {topbarLinks.map((option, index) => (
            <TransitionLink
              key={index}
              href={option.link}
              className={`${
                pathname === option.link &&
                "underline decoration-redish underline-offset-8 transition-colors delay-75"
              } font-bold`}
            >
              {option.name}
            </TransitionLink>
          ))}
        </div>

        <Link href="mailto:Info@omomiconsulting.com?subject=Inquiry&body=Hello%20Omomi%20Consulting,">
          <CustomButton
            text={"Book a consultation"}
            arrow={false}
            classname="hidden lg:flex"
          />
        </Link>

        <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="hamburger icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isOpen && (
        <div className="w-full">
          <div className="flex flex-col items-center gap-2">
            {topbarLinks.map((option, index) => (
              <Link
                key={index}
                onClick={() => setIsOpen(false)}
                className="p-4"
                href={option.link}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
