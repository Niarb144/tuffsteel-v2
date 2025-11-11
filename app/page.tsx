import Hero from "@/components/Hero";
import StatsSection from "@/components/Stats";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import Policies from "@/components/Policies";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <Policies />
      <BlogSection />      
    </>
  );
}
