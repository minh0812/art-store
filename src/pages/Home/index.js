import React, { useEffect } from "react";
import {
  SectionConcentratedWatercolors,
  SectionIntroduce,
  SectionMetallicAccents,
  SectionOilPastels,
  SectionSocial,
  SectionWatercolorConfections,
  SectionWatercolorConfetti,
  SectionWaterSolubleOilPastels,
} from "../../modules/home";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <SectionIntroduce />
      <SectionWatercolorConfections />
      <SectionWatercolorConfetti />
      <SectionMetallicAccents />
      <SectionConcentratedWatercolors />
      <SectionOilPastels />
      <SectionWaterSolubleOilPastels />
      <SectionSocial />
    </div>
  );
};
export default HomePage;
