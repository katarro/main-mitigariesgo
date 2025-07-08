"use client";
import React from "react";
import Header from "../components/home/header";
import HeroSection from "../components/home/hero";
import FeaturesSection from "../components/home/features";
import HowItWorksSection from "../components/home/how-works";
import ProjectionsSection from "../components/home/projections";
import PricingSection from "../components/home/plans";
import FAQSection from "../components/home/faqs";
import FinalCTASection from "../components/home/cta";
import Footer from "../components/home/footer";
// import HomePage from "./home/page";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* <HomePage /> */}

      <Header />

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <ProjectionsSection />

      <PricingSection />

      <FAQSection />

      <FinalCTASection />

      <Footer />
    </div>
  );
};

export default Home;