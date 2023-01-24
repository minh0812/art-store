import React from "react";
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
