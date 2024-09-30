import ClientTestimonials from "./components/ClientTestimonials";
import CampaignBanner from "./components/CompaignBanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import logo from "./logo.svg";
import "./styles/App.css";

function DetailPage() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ClientTestimonials />
      <HowItWorks />
      <FAQ />
      <CampaignBanner />
      <Footer />
    </div>
  );
}

export default DetailPage;
