import CustomButton from "@/components/shared/CustomButton";
import { AboutData, AboutImages } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us / Omomi Consulting",
    description:
      "Learn more about Omomi Consulting — our mission, our team, and our commitment to driving inclusive economic growth across communities and industries.",
  };
}

export default function about() {
  return (
    <div className="space-y-24">
      <section className="space-y-6 lg:flex lg:gap-12 p-8 lg:justify-center lg:items-center lg:h-[80vh] lg:bg-gray">
        <div className="space-y-6 lg:w-2/6">
          <p className="sub-header lg:text-2xl">ABOUT US</p>
          <h1 className="text-3xl lg:text-5xl">Rooted in Insight. Driven by Impact.</h1>
          <p className="lg:text-2xl">
            At Omomi Consulting, we are more than just advisors — we are
            strategic partners committed to unlocking the full potential of your
            business. Born from a vision to support sustainable and inclusive
            growth, we work with organizations to shape bold strategies,
            implement transformative solutions, and build resilience in an
            ever-changing world.
          </p>
          <CustomButton
            text={"Start Building with us"}
            arrow={true}
            classname={"w-[300px] h-[52px]"}
          />
        </div>

        <div className="border-4 lg:w-3/6 border-backdrop lg:border-0 rounded-3xl overflow-hidden h-[400px] relative">
          <Image
            src="/assets/images/about.png"
            alt="imact image"
            fill
            className="absolute object-cover z-0"
          />
          <div className="grid grid-cols-5 grid-rows-3 w-full h-full inset-0 absolute z-20">
            <div className="bg-transparent border-white border-8 row-span-3 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-2 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-1 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-2 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-3 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-2 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-1 col-span-1"></div>
            <div className="bg-transparent border-white border-8  row-span-1 col-span-1"></div>
          </div>
        </div>
      </section>

      <div className="space-y-8 p-8 ">
        <section className="lg:flex lg:gap-8">
          <Image
            src="/assets/images/lion.png"
            alt="lion image"
            width={1000}
            height={1000}
            className="object-cover hidden lg:flex"
          />
          <div className="space-y-4">
            <p className="sub-header ">OUR HISTORY</p>
            <h1 className="text-2xl">Proudly African-rooted</h1>
            <p>
              Founded in 2004 Omomi Consulting Ltd facilitates creativity,
              innovation and strategy for the growth and sustainability of
              businesses in Nigeria. We focus on providing strategy, solutions
              and tools for businesses within the following Industries:
            </p>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:p-8">
              {AboutData.map((data, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src="/assets/icons/strategy.svg"
                    alt={data}
                    width={20}
                    height={16}
                  />{" "}
                  <p className="font-bold">{data}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-8  w-full py-8">
          <h1 className="sub-header text-center lg:py-4">OUR PORTFOLIO</h1>
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center w-full gap-8">
            {AboutImages.map((data, index) => (
              <div
                key={index}
                className="border-4 lg:w-2/8 border-backdrop rounded-3xl overflow-hidden h-[376px] relative"
              >
                <div className="inset-0 z-10 absolute bg-gradient-to-t from-black/50 to-transparent"></div>
                <Image
                  src={data.image}
                  alt={data.text + "image"}
                  fill
                  className="object-cover"
                />
                <h1 className="absolute bottom-6 left-6 z-20 text-white text-2xl">
                  {data.text}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
