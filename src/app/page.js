import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <SectionTitle preTitle="Nextly Benefits" title="Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And it's completely open-source.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product. Analysts say a landing page with video has 3% more conversion rate. So, don't forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle preTitle="Testimonials" title="Here's what our customers said">
        Testimonials are a great way to increase brand trust and awareness. Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' possible questions here, which will increase the conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
      <Footer />
    </Container>
  );
}
