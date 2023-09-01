import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";
import { Col, Row } from "antd";
import Product from "../../components/Product";
import Title from "../../components/Title";

const SearchPage = () => {
  const { name } = useParams();
  const { products } = useContext(AppContext);

  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const filter = products.filter((product) => {
      return product?.name?.toLowerCase().includes(name?.toLowerCase());
    });
    setFilterProducts(filter);
  }, [name, products]);

  return (
    <>
      <Title
        title={"search"}
        items={[
          { content: "home", link: "/" },
          { content: "search", link: "/search" },
          { content: name || "...", link: `/search/${name}` },
        ]}
      />
      <h2
        style={{
          fontFamily: "Poppins",
          textAlign: "center",
          fontWeight: "500",
          margin: "20px 0",
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        {filterProducts.length} results for: {name}
      </h2>
      <Row gutter={[16, 16]}>
        {filterProducts.map((product) => {
          return (
            <Col key={product.id} xs={24} sm={12} md={12} lg={8} xl={6}>
              <Product
                name={product.name}
                image={product.images[0]}
                price={product.price}
                sale={product.sale}
                rate={product.rate}
                sold={product.sold}
                id={product.id}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SearchPage;
