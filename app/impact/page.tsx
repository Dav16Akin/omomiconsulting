import ImpactComponent from "@/components/ImpactComponent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Impact / Omomi Consulting",
    description:
      "Discover the measurable impact of Omomi Consulting's work — transforming organizations, empowering communities, and shaping a better future.",
  };
}

export default function impact() {
  return <ImpactComponent />;
}
