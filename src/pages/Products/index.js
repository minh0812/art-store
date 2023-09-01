import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import NavLeft from "../../modules/products/NavLeft";
import ProductList from "../../modules/products/ProductList";
import Title from "../../components/Title";
import { AppContext } from "../../context";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { products } = useContext(AppContext);
  const { category } = useParams();
  const [filter, setFilter] = useState({
    category: [],
    price: [0, 100],
    search: "",
  });
  const [productsFilter, setProductsFilter] = useState(products);

  useEffect(() => {
    if (category) {
      setFilter({ ...filter, category: [category] });
    }

    window.scrollTo(0, 0);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const newProducts = products.filter((product) => {
      const checkCategory =
        filter.category.length === 0 ||
        filter.category.includes(product.category);
      const checkPrice =
        product.price >= filter.price[0] && product.price <= filter.price[1];
      const checkSearch =
        product.name.toLowerCase().indexOf(filter.search.toLowerCase()) !== -1;
      return checkCategory && checkPrice && checkSearch;
    });
    setProductsFilter(newProducts);
  }, [filter, products]);

  return (
    <>
      <Title
        title={"product"}
        items={[
          { content: "home", link: "/" },
          { content: "products", link: "/products" },
        ]}
      />
      <Row>
        <Col xs={0} sm={0} md={0} lg={5} xl={5}>
          <NavLeft filter={filter} setFilter={setFilter} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={19} xl={19}>
          <ProductList products={productsFilter} />
        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
