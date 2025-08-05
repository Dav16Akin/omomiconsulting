import ContactForm from "@/components/forms/ContactForm";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us / Omomi Consulting",
    description:
      "Get in touch with Omomi Consulting. We'd love to hear from you and explore how we can help your organization grow sustainably.",
  };
}

export default function page() {
  const defaultCenter = { lat: 6.449, lng: 3.407 };
  return (
    <div className="w-full lg:flex lg:gap-8 lg:p-8 lg:items-center lg:justify-between">
      <ContactForm />
      <div className="relative hidden lg:h-[500px] lg:flex lg:w-4/6 lg:justify-center lg:items-center">
        <GoogleMapComponent center={defaultCenter} />
      </div>
    </div>
  );
}
