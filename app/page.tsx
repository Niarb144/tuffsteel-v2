import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mombasa Cement Limited is one of East Africa’s leading cement producers, 
              providing high-quality cement for infrastructure, construction, and innovation.
            </p>
          </div>
        </section>
      </AnimatedSection> */}
      <AnimatedSection />

      <ContactForm />
    </>
  );
}
