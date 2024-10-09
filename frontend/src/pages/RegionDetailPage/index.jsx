import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CampaignBanner from "../../components/CompaignBanner";
import ContactSession from "../../components/ContactSession";
import FAQ from "../../components/FAQ";
import HeroSection from "../../components/HeroSection";
import RegisterYourselfDetail from "../../components/RegisterYourselfDetail";
import { GetEntityData } from "../../api/services";
import DataNotFound from "../../components/DataNotFound";

function RegionDetailPage() {
  const { region } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetEntityData("devisions", region);
        if (response?.data) {
          setData(response.data);
        } else {
          setError("No data found for this region");
        }
      } catch (err) {
        console.error("Error fetching region data:", err);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region]);

  if (loading) return <div>Loading...</div>;
  if (error || !data)
    return <DataNotFound message={error || "Region not found"} />;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection data={data.attributes} />
        <RegisterYourselfDetail data={data.attributes.Registration} />
        <FAQ data={data.attributes.FAQ} />
        <CampaignBanner data={data.attributes.Banner} />
        <ContactSession data={data.attributes.ContactUs} />
      </main>
    </div>
  );
}

export default RegionDetailPage;
