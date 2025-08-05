import AboutComponent from "@/components/AboutComponent";
import { Metadata } from "next";
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
<AboutComponent/>
  );
}
