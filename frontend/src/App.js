import { useState, useEffect } from "react";
import CustomRoutes from "./routes";
import "./styles/App.css";
import { GetData } from "./api/services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await GetData();
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
    <BrowserRouter>
      <div className="App">
        <Header data={data.Header} loading={loading} />
        <main>
          <CustomRoutes />
        </main>
        <Footer data={data.Footer} loading={loading} />
      </div>
    </BrowserRouter>
  );
}

export default App;
