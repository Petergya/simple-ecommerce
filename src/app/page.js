import Hero from "@/landingPageComponent/Hero";
import OurJourney from "@/landingPageComponent/OurJourney";
import OurTeam from "@/landingPageComponent/OurTeam";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <OurJourney />
      <OurTeam />
    </DefaultLayout>
  );
}
