import { Col, Image, Row } from "antd";
import React from "react";
import "./gallery.scss";

const Gallery = () => {
  const images = [
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/18-colors-art-tubes-header.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/18-colors-art-tubes-scaled.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/Ameena-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-ameena-thepaperjournal-berries.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-chalucapalette.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-dearannart.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-garima-loose-florals.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-garima-mylittlebasil.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-garima-peonies.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-garima.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-marianne-landscape.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-marianne.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-marianne2.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-1.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-2.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-3.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-4.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-5.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-6.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-7.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-8.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-9.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-10.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-11.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-12.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-13.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-14.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-media-15.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-natalia.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-natalia2.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/durga-ram-fox-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/fall-fruits-ania-mama-fabrics-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/garden-mouse-art-tubes-durga-ram.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/kristin-miller-winter-scene-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/marianne-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/murchana-art-tubes-swatch2.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/murchana-swatches-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/mylittlebasil.co-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/preeti-boats-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/preeti-complexion-art-tubes.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2019/12/pro-tubes-artwork-joly-poa-sm.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2020/01/IMG_20191208_134928-01-01.jpeg",
    "https://www.artphilosophy.com/wp-content/uploads/2020/01/IMG_20191115_105516-01-01-01.jpeg",
    "https://www.artphilosophy.com/wp-content/uploads/2020/01/IMG_20191026_172131-01.jpeg",
    "https://www.artphilosophy.com/wp-content/uploads/2020/01/IMG_9781.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2020/01/IMG_0636.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2022/07/InShot_20220627_225439730.jpg",
    "https://www.artphilosophy.com/wp-content/uploads/2022/07/InShot_20220627_225840791.jpg",
  ];
  return (
    <Row gutter={[15, 15]} className="gallery" style={{ padding: "2% 10%" }}>
      <Image.PreviewGroup>
        {images.map((image, index) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Image src={image} alt="gallery" />
          </Col>
        ))}
      </Image.PreviewGroup>
    </Row>
  );
};

export default Gallery;
