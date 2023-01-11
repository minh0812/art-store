import React from "react";
import {
  SectionConcentratedWatercolors,
  SectionIntroduce,
  SectionMetallicAccents,
  SectionOilPastels,
  SectionSocial,
  SectionVideos,
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
      <SectionVideos />
      <SectionSocial />
    </div>
  );
};
export default HomePage;
