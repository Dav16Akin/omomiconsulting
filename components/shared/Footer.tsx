import Image from "next/image";

import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { topbarLinks } from "@/constants";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="min-h-[372px] relative overflow-hidden">
        <div className="inset-0 absolute z-0">
          <Image
            src="/assets/images/bg-parallax.jpg"
            alt="parallax image"
            fill
            className="object-cover"
          />
        </div>

        {/* info div */}
        <div className="bg-pinkish space-y-10 m-6 flex flex-col lg:flex-row-reverse lg:p-8 items-center justify-center rounded-3xl relative z-10">
          <Image
            src="/assets/images/bg-footer.png"
            alt="image"
            width={500}
            height={400}
            className="overflow-hidden rounded-t-3xl lg:rounded-3xl w-full"
            priority
          />

          <div className="lg:w-3/4">
            <div className="px-8 space-y-4">
              <h1 className="text-2xl lg:text-5xl text-left">
                Championing Inclusive Growth
              </h1>
              <p className="≈text-left text-text lg:text-2xl">
                We’ve always been big champions of the growth potential of our
                clients. Today, we’re privileged to work with companies and
                institutions that are on a new growth journey, one that pursues
                sustainable inclusion, and economic growth, all at the same
                time. Ready to grow? Let’s shape the future of your business
                together
              </p>
            </div>

            <div className="m-4">
              <CustomButton
                text={" Get started now"}
                arrow={false}
                classname={"w-[300px] h-[52px]"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 space-y-6 lg:flex lg:gap-8 py-16 px-8">
        <div className="border-b lg:border-r lg:border-b-0 pb-6 lg:p-16 border-text space-y-4">
          <Image
            src="/assets/icons/logo.png"
            alt="omomi consulting logo"
            width={300}
            height={100}
          />
          <p className="text-text">
            We help deliver products and projects through a disciplined
            execution rhythm to improve safety outcomes
          </p>
          {/* <div className="flex gap-4">
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <Linkedin />
            </Link>
          </div> */}
        </div>

        <div className="flex gap-8 font-semibold lg:p-16">
          <div className="flex flex-col gap-6 w-2/4 h-full">
            <h2 className="underline decoration-redish decoration-2 underline-offset-8">
              Company
            </h2>
            <ul className="flex flex-col gap-6">
              {topbarLinks.map((link, index) => (
                <Link
                  className="hover:text-redish"
                  key={index}
                  href={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="underline decoration-redish decoration-2 underline-offset-8">
              Contact Us
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <Mail className="w-8"/> <span>info@omomiconsulting.com</span>
              </div>
              <div className="flex gap-2">
                <Globe className="w-8"/>
                <span>www.omomiconsulting.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-12"/>
                <span>
                  35 Moloney Street, Obalende, Lagos Island, Lagos State,
                  Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
