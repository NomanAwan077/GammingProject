import ClientTestimonials from "../../components/ClientTestimonials";
import CampaignBanner from "../../components/CompaignBanner";
import CTASection from "../../components/CtaSection";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import LandingHeroSection from "../../components/LandingHeroSection";
import RecentBlogSection from "../../components/RecentBlogs";
import TestimonialSection from "../../components/TestmonialSection";
import WhyChooseTLF from "../../components/WhyChoseTLF";

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <LandingHeroSection />
      <ClientTestimonials />
      <HowItWorks />
      <WhyChooseTLF />
      <TestimonialSection />
      <FAQ />
      <RecentBlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
