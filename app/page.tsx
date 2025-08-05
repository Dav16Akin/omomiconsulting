import CustomButton from "@/components/shared/CustomButton";
import StrategySection from "@/components/StrategySection";
import { ServicesData, StrategyData } from "@/constants";
import Image from "next/image";
import { gsap } from "gsap";



import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home / Omomi Consulting",
    description:
      "Welcome to Omomi Consulting — empowering inclusive growth for institutions and businesses across Africa through strategic insights and innovative solutions.",
  };
}

export default function Home() {
  return (
    <>
      <section className="h-[580px] lg:h-screen p-6 md:p-28 relative max-h-screen flex items-center w-full">
        <Image
          src="/assets/images/bg-home-hero.png"
          alt="hero background image"
          fill
          className="object-cover object-right z-10"
          priority
          placeholder="blur"
          blurDataURL="/assets/images/bg-home-hero.png"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent opacity-100 z-20" />

        {/* TEXT */}
        <div className="space-y-6 z-30 lg:w-3/5 md:w-4/5 lg:mb-16">
          <p className="sub-header lg:text-2xl ">WELCOME TO OMOMI CONSULT</p>
          <h1 className="text-3xl lg:text-6xl">
            We Pull the Strings of Strategy, So You Can Hit the High Notes of
            Growth
          </h1>
          <h2 className="text-black lg:text-2xl">
            Our expert guidance in business development and finance empowers
            organizations to scale sustainably and confidently.
          </h2>

          <CustomButton
            text={"Start Building with us"}
            arrow={true}
            classname={"w-[300px] h-[62px]"}
          />
        </div>
      </section>

      <section className="p-6 mt-6 space-y-8 lg:flex lg:flex-row-reverse lg:justify-center lg:gap-8 lg:items-center lg:p-16">
        <div className="flex flex-col gap-4 lg:w-3/5 lg:p-8">
          <p className="sub-header lg:text-2xl">WHAT ABOUT US</p>
          <h1 className="text-2xl lg:text-5xl">
            Empowering Growth Through Strategy and Purpose.
          </h1>
          <p className="text-text  lg:text-2xl">
            We help deliver products and projects through a disciplined
            execution rhythm to improve safety outcomes, maintain quality, and
            reduce costs. This end-to-end value assurance and optimization
            support, tailored to all our major projects and is further enhanced
            by full-time support from Omomi experts.
          </p>
        </div>

        <div className="border-8 relative overflow-hidden border-backdrop rounded-3xl bg-backdrop">
          <Image
            src="/assets/icons/ellipse.png"
            alt="image"
            width={24}
            height={24}
            className="object-cover top-1 w-fit h-6 absolute"
          />
          <Image
            src="/assets/icons/ellipse.png"
            alt="image"
            width={24}
            height={24}
            className="object-cover w-fit bottom-1 right-0 h-6 absolute"
          />
          <Image
            src="/assets/images/bg-about-us.png"
            alt="about us image"
            width={1000}
            height={1000}
            className="object-cover object-[25%_75%]  min-h-[436px] w-full rounded-3xl"
            placeholder="blur"
            blurDataURL="/assets/images/bg-about-us.png"
          />
        </div>
      </section>

      <section className="text-center bg-gray relative min-h-screen px-6 overflow-hidden pb-10">
        <div className="flex relative flex-col gap-4 py-8 z-20">
          <p className="sub-header font-normal lg:text-2xl">OUR SERVICES</p>
          <h1 className="text-2xl lg:text-5xl">
            Tailored Solutions For Your Business
          </h1>
        </div>

        <div className="relative text-left flex  flex-col md:p-8 lg:p-16">
          {ServicesData.map((data, index) => {
            return (
              <div
                key={index}
                className="group relative z-20 bg-gray border-t border-gray-400 overflow-hidden"
              >
                <Image
                  src="/assets/images/hover.jpg"
                  alt="image"
                  fill
                  className="object-cover w-full opacity-0  group-hover:opacity-50 absolute transition-opacity duration-700"
                />
                <div className="relative space-y-4 z-10 p-4 lg:flex items-center justify-between gap-3 transition-all duration-700 group-hover:text-white group-hover:bg-redish/80 group-hover:rounded-2xl group-hover:overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.header + 1}
                    width={30}
                    height={30}
                    className="lg:w-16 lg:h-16 invert-0 brightness-0 group-hover:invert"
                  />
                  <h1 className="text-2xl ">{data.header}</h1>
                  <p className="lg:text-2xl lg:w-3/6">{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="p-6 lg:flex lg:p-24 lg:gap-8">
        <div className="flex gap-4 flex-col lg:w-4/6 ">
          <h1 className="text-2xl lg:text-5xl">
            Where Strategy Meets Execution
          </h1>
          <p className="text-text lg:text-2xl">
            We blend insight and innovation to unlock sustainable growth. Our
            focus? Long-term profitability for all stakeholders—across every
            strategic touchpoint
          </p>

          <div className="hidden lg:block overflow-hidden border-backdrop rounded-3xl">
            <Image
              src="/assets/images/strategic.png"
              alt="strategic image"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/assets/images/strategic.png"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6 lg:grid lg:grid-cols-2">
          {StrategyData.map((data) => (
            <StrategySection
              key={data.header + 1}
              header={data.header}
              content={data.content}
              image={data.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
