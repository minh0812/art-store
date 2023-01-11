import React from "react";
import { Link } from "react-router-dom";
import "./SectionIntroduce.scss";

const SectionIntroduce = () => {
  return (
    <section className="SectionIntroduce">
      <div className="SectionIntroduce__content">
        {/* center element display flex */}
        <p></p> 
        <p>
          Discover a professional grade watercolor like no other! Create
          gradients, shading and blends effortlessly with these Art Philosophy
          Professional Watercolor Tubes. Perfect for achieving professional
          results, these tubes offer flexibility and value by providing highly
          concentrated pigments with longevity and light fastness. Discover a
          new way to watercolor with our Art Philosophy Watercolor Tubes.
        </p>
        <Link to="/products">Shop now</Link>
      </div>
    </section>
  );
};

export default SectionIntroduce;
