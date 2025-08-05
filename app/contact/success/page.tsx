"use client";

import CustomButton from "@/components/shared/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <section className="flex flex-col items-center">
          <Image
            src="/assets/icons/success.gif"
            height={100}
            width={100}
            alt="success"
            className="object-fit"
          />
          <h2 className="text-3xl mb-6 max-w-[600px] text-center">
            Your Response has been successfully submitted!
          </h2>
          <p className="text-2xl">We will be in touch shortly to confirm.</p>
        </section>

        <Link href="/">
          <CustomButton text="Home" arrow={true} isLoading={false} />
        </Link>

        <p className="copyright py-12">© 2025 Omomi Consulting</p>
      </div>
    </div>
  );
};

export default page;
