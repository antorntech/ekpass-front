import React from "react";
import LandingHeader from "../../shared/LandingHeader";
import Banner from "./banner/Banner";
import Support from "./support/Support";
import TollRate from "./tollrate/TollRate";
import QuickAction from "./quickaction/QuickAction";
import HowItWorks from "./howitworks/HowItWorks";
import Footer from "../../shared/Footer";

function Landing() {
  return (
    <div>
      <LandingHeader />
      <div className="mt-12 md:mt-0">
        <Banner />
        <QuickAction />
        <HowItWorks />
        <TollRate />
        <Support />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
