import React from "react";
import { useTranslation } from "react-i18next";

const CVSection = () => {
  const {t}= useTranslation()
  return (
    <section className="cv-section py-12 px-6 text-center">
      <p className=" md:text-lg text-gray-700 dark:text-slate-300 mb-6">
        {t('cvdescription')}
      </p>
      <a
        href="/RajibCV.pdf" 
        download="Rajib_Pokhrel_CV.pdf"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
       {t('downloadbutton')}
      </a>
    </section>
  );
};

export default CVSection;
