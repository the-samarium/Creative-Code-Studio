import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-7";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ContentSection/>
    <Features/>
    <StatsSection/>
    <CallToAction/>
    <FooterSection/>
    </>
  );
}
