import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionIntroduce.scss";

const SectionIntroduce = () => {
  return (
    <section className="SectionIntroduce">
      <div className="SectionIntroduce__content">
        {/* center element display flex */}
        <p></p>
        <p className="animate__animated animate__fadeInUp">
          Discover a professional grade watercolor like no other! Create
          gradients, shading and blends effortlessly with these Art Philosophy
          Professional Watercolor Tubes. Perfect for achieving professional
          results, these tubes offer flexibility and value by providing highly
          concentrated pigments with longevity and light fastness. Discover a
          new way to watercolor with our Art Philosophy Watercolor Tubes.
        </p>
        <ButtonCustom className="animate__animated animate__backInLeft">Shop Now</ButtonCustom>
      </div>
    </section>
  );
};

export default SectionIntroduce;
