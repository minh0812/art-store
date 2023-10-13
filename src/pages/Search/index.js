import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";
import { Col, Row, Spin } from "antd";
import Product from "../../components/Product";
import Title from "../../components/Title";

const SearchPage = () => {
  const { name } = useParams();
  const { products } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "65vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontFamily: "Poppins",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "24px",
              textTransform: "uppercase",
            }}
          >
            {filterProducts.length} results for: {name}
          </h2>
          <Row style={{ padding: "0 10px 10px", width: "100%" }}>
            {filterProducts.map((product) => {
              return (
                <Col
                  key={product.id}
                  xs={24}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={6}
                  style={{ padding: "5px" }}
                >
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
        </div>
      )}
    </>
  );
};

export default SearchPage;
