import ClientTestimonials from "../../components/ClientTestimonials";
import CampaignBanner from "../../components/CompaignBanner";
import CTASection from "../../components/CtaSection";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowItWorks from "../../components/HowItWorks";
import LandingHeroSection from "../../components/LandingHeroSection";
import RecentBlogSection from "../../components/RecentBlogs";
import TestimonialSection from "../../components/TestmonialSection";
import WhyChooseTLF from "../../components/WhyChoseTLF";
import { useState, useEffect } from "react";
import { GetData } from "../../api/services";
import ProvinceGames from "../../components/ProvinceGames";
import ContactSession from "../../components/ContactSession";
import { LandingPageUrl } from "../../constant/index";

function LandingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await GetData(LandingPageUrl);
        setData(dataPromise?.data[0]?.attributes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col align-center justify-center abc">
      <LandingHeroSection data={data.HeroSection} loading={loading} />
      <ClientTestimonials data={data.ClientTestimonial} loading={loading} />
      <HowItWorks data={data.HowItWorks} loading={loading} />
      <WhyChooseTLF data={data.WhyChoseTLF} loading={loading} />
      <TestimonialSection data={data.ClientReviews} loading={loading} />
      <FAQ data={data.FAQ} loading={loading} />
      <RecentBlogSection data={data.RecentBlogs} loading={loading} />
      <ProvinceGames data={data.ProvinceGames} loading={loading} />
      <CTASection data={data.Banner} loading={loading} />
      <ContactSession data={data.ContactUs} loading={loading} />
    </div>
  );
}

export default LandingPage;
