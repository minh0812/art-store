import { Col, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";
import { formatPrice } from "../../../utils";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (_, cart) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={cart.image}
          alt={cart.product}
        />
        <span>{cart.product}</span>
      </div>
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
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (_, cart) => <span>{formatPrice(cart.total)}</span>,
  },
];
const RightSide = () => {
  const { carts } = useContext(AppContext);
  const [cartCheckout, setCartCheckout] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!carts) return;
    const data = carts.filter((cart) => cart.check);
    setCartCheckout(
      data.map((cart) => ({
        key: cart.id,
        product: cart.name,
        image: cart.images[0],
        price: cart.price,
        quantity: cart.quantity,
        total: cart.price * cart.quantity * (1 - cart.sale),
      }))
    );
    setTotal(
      data.reduce(
        (total, cart) =>
          cart.check
            ? total + cart.price * cart.quantity * (1 - cart.sale)
            : total,
        0
      )
    );
  }, [carts]);

  return (
    <Col  xs={24} sm={24} md={12} xl={12} style={{ padding: "0 5px 0 10px" }}>
      <Table pagination={false} columns={columns} dataSource={cartCheckout} />
    </Col>
  );
};

export default RightSide;
