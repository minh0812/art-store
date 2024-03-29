import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";
import Content from "../../modules/productID/Content";
import SimilarProduct from "../../modules/productID/RelatedProduct";
import { AppContext } from "../../context";

const ProductID = () => {
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 130,
      behavior: "smooth",
    });
    const product = products.find((product) => product.id === +id);
    setProduct(product);
  }, [id, products]);
  return (
    product && (
      <>
        <Title
          title={"product"}
          items={[
            { content: "home", link: "/" },
            { content: "products", link: "/products" },
            { content: product?.name, link: "" },
          ]}
        />
        <Content
          id={product.id}
          name={product.name}
          price={product.price}
          images={
            // unique images
            product?.images?.filter(
              (image, index) => product.images.indexOf(image) === index
            )
          }
          rate={product.rate}
          sold={product.sold}
          sale={product.sale}
          description={product.description}
          reviews={product.reviews}
        />
        <SimilarProduct id={product.id} category={product.category} />
      </>
    )
  );
};

export default ProductID;
