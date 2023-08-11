import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";
import Content from "../../modules/productID/Content";
import SimilarProduct from "../../modules/productID/RelatedProduct";
import { AppContext } from "../../context";

const ProductID = () => {
  const { id } = useParams();
  // const product = {
  //   name: "Water soluble oil pastels rustic",
  //   price: 97,
  //   sale: 0.1,
  //   rate: 4,
  //   sold: 100,
  //   images: [
  //     "https://i.ibb.co/PwkHF4s/16687670281216553506319322-jpg.jpg",
  //     "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
  //     "https://i.ibb.co/tZgx88H/16687668741166553506319251-jpg.jpg",
  //     "https://i.ibb.co/TvN6qgS/16687668741176553506319252-jpg.jpg",
  //     "https://i.ibb.co/qN7jksp/166876370841307e69cecce3273dcfb24bd2201d7c4ab-jpg.jpg",
  //     "https://i.ibb.co/P4Zy1JD/1668764987042655350636722-1-jpg.jpg",
  //     "https://i.ibb.co/G5qMTGd/1668763708414watercolor04-png.png",
  //   ],
  // };
  const { products } = useContext(AppContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const product = products.find((product) => product.id === +id);
    setProduct(product);
  }, [id, products]);
  return (
    product && (
      <>
        <Title title={"product"} items={["home", "product", product.name]} />
        <Content
          name={product.name}
          price={product.price}
          images={product.images}
          rate={product.rate}
          sold={product.sold}
          sale={product.sale}
        />
        <SimilarProduct />
      </>
    )
  );
};

export default ProductID;
