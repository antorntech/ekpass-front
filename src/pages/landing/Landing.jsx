import React from "react";
import LandingHeader from "../../shared/LandingHeader";
import Banner from "./banner/Banner";

function Landing() {
  return (
    <div>
      <LandingHeader />
      <div className="mt-20 md:mt-0">
        <Banner />
      </div>
    </div>
  );
}

export default Landing;
