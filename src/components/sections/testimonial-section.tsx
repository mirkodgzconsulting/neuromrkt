import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";

export function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium section-title text-center text-balance">
          Cosa dicono i nostri clienti
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Scopri come NEUROMRKT™️ sta trasformando il marketing di aziende come la tua con risultati concreti e misurabili.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}
