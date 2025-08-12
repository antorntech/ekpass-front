import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="md:min-h-screen flex items-center py-12 md:py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              <Trans
                i18nKey="banner.title"
                components={{ green: <span className="text-green-600" /> }}
              />
            </h1>
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600">
            {t("banner.description")}
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md text-md md:text-lg hover:bg-green-700 transition"
          >
            {t("banner.button")}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/assets/banner-bg.png"
            alt="Toll System"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
