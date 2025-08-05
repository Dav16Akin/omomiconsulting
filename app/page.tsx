import type { Metadata } from "next";
import HomeComponent from "@/components/HomeComponent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home / Omomi Consulting",
    description:
      "Welcome to Omomi Consulting — empowering inclusive growth for institutions and businesses across Africa through strategic insights and innovative solutions.",
  };
}

export default function Home() {
  return <HomeComponent />;
}
