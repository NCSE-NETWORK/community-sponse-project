import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Sponsors from "@/components/sponsors";
import Projects from "@/components/projects";
import CallForSponsor from "@/components/call-for-sponsor";
import Communities from "@/components/communities";
import Application from "@/components/application";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Sponsors />
      <Projects />
      <CallForSponsor />
      <Communities />
      <Application />
      <Contact />
      <Footer />
    </main>
  );
}
