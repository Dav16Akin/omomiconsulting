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
    <div className="space-y-12">
      <section className="space-y-6 lg:flex lg:gap-12 p-8 lg:justify-center lg:items-center lg:h-[80vh] lg:bg-gray">
        <div className="space-y-6 lg:w-2/6">
          <p className="sub-header lg:text-2xl">ABOUT US</p>
          <h1 className="text-3xl lg:text-5xl">
            Rooted in Insight. Driven by Impact.
          </h1>
          <p className="lg:text-2xl text-text">
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

        <div className="md:w-[600px] md:h-[600px] rounded-3xl overflow-hidden h-[376px] relative">
          <Image
            src="/assets/images/about.png"
            alt="about image"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/assets/images/about.png"
            priority
          />
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
            placeholder="blur"
            blurDataURL="/assets/images/lion.png"
            loading="lazy"
          />
          <div className="space-y-4">
            <p className="sub-header ">OUR HISTORY</p>
            <h1 className="text-2xl lg:text-5xl">Proudly African-rooted</h1>
            <p className="text-text lg:text-2xl">
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
                    placeholder="blur"
                    blurDataURL="/assets/icons/strategy.svg"
                    loading="lazy"
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
                  placeholder="blur"
                  blurDataURL={"data.image"}
                  loading="lazy"
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
