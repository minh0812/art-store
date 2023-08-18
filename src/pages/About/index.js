import React from "react";
import Title from "../../components/Title";
import About from "../../modules/about";

const AboutPage = () => {
  return (
    <>
      <Title
        title="About"
        items={[
          { content: "home", link: "/" },
          { content: "about", link: "/about" },
        ]}
      />
      <About />
    </>
  );
};

export default AboutPage;
