import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCar,
  faWallet,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const iconColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-purple-500",
];
const icons = [faUserPlus, faCar, faWallet, faHeadset];

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <div id="how-it-works" className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          {t("howItWorks.title")}
        </h1>
        <p className="text-gray-500 mt-2">{t("howItWorks.subtitle")}</p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {steps.map((s, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 border-t-4 hover:shadow-lg transition duration-300"
            style={{ borderTopColor: iconColors[index].replace("bg-", "") }}
          >
            <div
              className={`${iconColors[index]} text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-lg mb-4`}
            >
              <FontAwesomeIcon icon={icons[index]} className="text-2xl" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {s.title}
            </h3>

            <ul className="mt-4 text-gray-600 text-sm list-disc list-inside space-y-1">
              {s.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
