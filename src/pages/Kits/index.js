import React from "react";
import Title from "../../components/Title";
import NavLeft from "../../modules/kits/NavLeft";
import { Col, Row } from "antd";
import Product from "../../components/Product";

const KitsPage = () => {
  const kits = [
    {
      id: 47,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2021/11/APKit1-1230x1536-1.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 49.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "ART PHILOSOPHY KIT #1 – 1 WATERCOLOR CONFETTI SET + 1 8×10 WATERCOLOR COLORING BOOK + 1 PACK WATERCOLOR BRUSH PENS",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 48,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2021/11/APKit2-1230x1536-1.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 49.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "ART PHILOSOPHY KIT #2 – 1 SET CONFECTIONS CLASSICS + 1 WATERCOLOR COLORING BOOK + 1 PACK WATERCOLOR BRUSH PENS",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 49,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2021/11/APKit3-1230x1536-1.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 29.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "ART PHILOSOPHY KIT #3 – 1 MAIN STREET COLORING BOOK + 1 PACK SWEET PASTELS WATERCOLOR PENCILS",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 50,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2022/06/Joly-Pao-kit_fix.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 39.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "BOLD AND BEAUTIFUL LOOSE WATERCOLOR FLORALS BY JOLY POA",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 51,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2021/11/APKit4-1230x1536-1.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 39.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "ART PHILOSOPHY KIT #4 – 1 PACK BASICS OIL PASTELS + 1 A4 WATERCOLOR PAPER PAD + 1 PACK WATERCOLOR BRUSH PENS",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 52,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2022/12/Bokeh-Christmas-copy-scaled.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 42.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "BOKEH CHRISTMAS ORNAMENT KIT",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 53,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2022/12/Butterfly-illustration-copy-scaled.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 42.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "BUTTERFLY ILLUSTRATION AND BASIC TECHNIQUES KITWater soluble oil pastels rustic",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
    {
      id: 54,
      images: [
        "https://www.artphilosophy.com/wp-content/uploads/2022/08/Dora-kit-web-1-768x994.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
      ],
      price: 54.99,
      description:
        "Get the best of both worlds with the Rustic Set of Water-Soluble Oil Pastels from Prima Marketing. This is a set of 12 luscious pastels from the Art Philosophy Collection.",
      created_by: "duyminh081201@gmail.com",
      updated_by: null,
      size: ["12 màu"],
      name: "CALMING SEASCAPE BY DORA",
      quantity: 50,
      category_id: 2,
      created_at: "2023-07-03T12:00:55.075279",
      updated_at: null,
    },
  ];

  return (
    <>
      <Title title={"kits"} items={["home", "kits"]} />
      <Row gutter={[16, 16]} style={{padding: "20px"}}>
        {kits.map((kit) => (
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <Product
              key={kit.id}
              name={kit.name}
              sale={0.1}
              price={kit.price}
              image={kit.images[0]}
              rate={4}
              sold={100}
              id={kit.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default KitsPage;
