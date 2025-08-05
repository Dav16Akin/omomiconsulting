"use client";

import { ImpactImages } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomButton from "./shared/CustomButton";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const ContactComponent = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "lines",
    });

    const subtitleSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    gsap.from(heroSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(subtitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  });
  return (
    <div className=" space-y-24">
      <section className="space-y-6 lg:flex lg:gap-12 p-8 lg:p-16 lg:justify-center lg:items-center lg:h-[80vh] lg:bg-gray">
        <div className="space-y-6 lg:w-3/6">
          <p className="sub-header lg:text-2xl">OUR IMPACT</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl title">
            Maximizing Project Impact Through Strategic Capital Alignment
          </h1>
          <p className="lg:text-2xl text-text subtitle">
            Omomi helps businesses deploy best-in-class thinking for maximum
            impact across their project’s portfolios and project delivery value
            chain. Our network of experts challenges traditional approaches to
            capital productivity and partner with industry leaders, including
            owners, operators, and investors to align capital, strategy,
            portfolios, and transform project development and optimize delivery
            across all asset classes.
          </p>

          <CustomButton
            text={"Start Building with us"}
            arrow={true}
            classname={"w-[300px] h-[62px]"}
          />
        </div>

        <div className="border-4 md:w-[600px] md:h-[600px] border-backdrop rounded-3xl overflow-hidden h-[376px] relative">
          <Image
            src="/assets/images/impact.png"
            alt="impact image"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/assets/images/impact.png"
            priority
          />
        </div>
      </section>

      <div className="space-y-8 p-8">
        <div className="space-y-8">
          <h1 className="text-2xl lg:text-center lg:text-5xl">
            Product Development and Delivery
          </h1>
          <p className="lg:text-2xl lg:text-center">
            We help deliver products and projects through a disciplined
            execution rhythm to improve safety outcomes, maintain quality, and
            reduce costs. This end-to-end value assurance and optimization
            support, tailored to all our major projects and is further enhanced
            by full-time support from Omomi experts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {ImpactImages.map((data, index) => {
            return (
              <div
                key={index}
                className="border-4 lg:w-2/6 border-backdrop rounded-3xl overflow-hidden h-[376px] relative"
              >
                <div className="inset-0 z-10 absolute bg-gradient-to-t from-black/50 to-transparent"></div>
                <Image
                  src={data.image}
                  alt={data.text + "image"}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={`${data.image}`}
                  loading="lazy"
                />
                <h1 className="absolute z-20 bottom-6 left-6 text-white text-2xl">
                  {data.text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
