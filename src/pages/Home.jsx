import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickActions from "../components/QuickActions";
import LiveShelters from "../components/LiveShelters";
import SafetyDashboard from "../components/SafetyDashboard";
import HowItWorks from "../components/HowItWorks";
import ResponseTeams from "../components/ResponseTeams";
import AboutSahay from "../components/AboutSahay";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <HowItWorks />

      <QuickActions />

      <LiveShelters />

      <SafetyDashboard />

      <ResponseTeams />

      <AboutSahay />

      <Footer />
    </>
  );
}

export default Home;