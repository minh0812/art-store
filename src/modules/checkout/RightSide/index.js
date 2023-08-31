import { Col, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";
import { formatPrice } from "../../../utils";
import { Link } from "react-router-dom";
import "./RightSide.scss";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (_, cart) => (
      <Link
        to={`/products/${cart.key}`}
        style={{}}
        className="RightSide__product"
      >
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={cart.image}
          alt={cart.product}
        />
        <span>{cart.product}</span>
      </Link>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (_, cart) => <span>{formatPrice(cart.price)}</span>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (_, cart) => <span>{formatPrice(cart.total)}</span>,
  },
];
const columnsXS = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (_, cart) => (
      <Link
        to={`/products/${cart.key}`}
        style={{}}
        className="RightSide__product"
      >
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={cart.image}
          alt={cart.product}
        />
        <span>{cart.product}</span>
      </Link>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (_, cart) => <span>{formatPrice(cart.price)}</span>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
];

const RightSide = () => {
  const { carts } = useContext(AppContext);
  const [cartCheckout, setCartCheckout] = useState([]);

  useEffect(() => {
    if (!carts) return;
    const data = carts.filter((cart) => cart.check);
    setCartCheckout(
      data.map((cart) => ({
        key: cart.id,
        product: cart.name,
        image: cart.images[0],
        price: cart.price * (1 - cart.sale),
        quantity: cart.quantity,
        total: cart.price * cart.quantity * (1 - cart.sale),
      }))
    );
  }, [carts]);

  return (
    <Col className="RightSide" xs={24} sm={24} md={12} xl={12}>
      {window.innerWidth <= 768 ? (
        <Table
          pagination={false}
          columns={columnsXS}
          dataSource={cartCheckout}
        />
      ) : (
        <Table pagination={false} columns={columns} dataSource={cartCheckout} />
      )}
    </Col>
  );
};

export default RightSide;
