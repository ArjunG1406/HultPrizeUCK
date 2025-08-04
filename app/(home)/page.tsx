import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import About from "./components/about";
import Partners from "./components/partners";
import Summit from "./components/yathra";
import Execom from "./components/execom";
import { Timeline } from "../components/Timeline";
import TimelinePage from "./components/timeline";
import Footer from "./components/footer";
import WhyHult from "./components/whyhult";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />
      <Hero />
      <section className="w-full bg-black text-white font-regular">
        <VelocityScroll defaultVelocity={2} numRows={1}>DREAMS&middot; VISIONS &middot; POSSIBILITY &middot;</VelocityScroll>
      </section>
      <WhyHult />
      <About />
      
      
      <Summit />
      <Execom />
      <TimelinePage />
      <Footer />
    </main>
  );
}
