import React, { useEffect } from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionIntroduce.scss";

const SectionIntroduce = () => {
  const [animate, setAnimate] = React.useState(
    "animate__backInLeft animate__delay-1s"
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimate("animate__bounceIn animate__infinite animate__slow");
    }, 3000);
  }, []);

  return (
    <section className="SectionIntroduce">
      <div className="SectionIntroduce__content">
        <div className="SectionWatercolorConfections__right__separator animate__animated animate__fadeInUp"></div>
        <p className="animate__animated animate__fadeInUp">
          Discover a professional grade watercolor like no other! Create
          gradients, shading and blends effortlessly with these Art Philosophy
          Professional Watercolor Tubes. Perfect for achieving professional
          results, these tubes offer flexibility and value by providing highly
          concentrated pigments with longevity and light fastness. Discover a
          new way to watercolor with our Art Philosophy Watercolor Tubes.{" "}
          {process.env.REACT_APP_VERSION}
        </p>
        <ButtonCustom
          to={"/products"}
          className={`SectionIntroduce__content-btn animate__animated ${animate}`}
        >
          Shop Now
        </ButtonCustom>
      </div>
    </section>
  );
};

export default SectionIntroduce;
