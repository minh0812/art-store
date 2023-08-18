import { Button, Checkbox, Input, Slider } from "antd";
import { FilterFilled, ClearOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import "./navLeft.scss";

const NavLeft = ({ filter, setFilter }) => {
  return (
    <div className="navLeft">
      <div className="navLeft__header">
        <h3>Filter</h3>
        <FilterFilled />
      </div>
      <Input
        placeholder="Search products..."
        suffix={<SearchOutlined />}
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <div className="navLeft__categories">
        <h3>Categories</h3>
        <Checkbox.Group
          className="navLeft__categories__type"
          value={filter.category}
          onChange={(values) => {
            setFilter({ ...filter, category: values });
          }}
        >
          <Checkbox value="watercolor-confections">
            WATERCOLOR CONFECTIONS
          </Checkbox>
          <Checkbox value="watercolor-confetti">WATERCOLOR CONFETTI</Checkbox>
          <Checkbox value="metallic-accents">METALLIC ACCENTS</Checkbox>
          <Checkbox value="concentrated-watercolors">
            CONCENTRATED WATERCOLORS
          </Checkbox>
          <Checkbox value="oil-pastels">OIL PASTELS</Checkbox>
        </Checkbox.Group>
      </div>
      <div className="navLeft__price">
        <h3>Price</h3>
        <p>
          From <strong>${filter.price[0]}</strong> to{" "}
          <strong>${filter.price[1]}</strong>
        </p>
        <Slider
          range
          max={100}
          value={filter.price}
          tooltip={{ formatter: (value) => `$${value}` }}
          onChange={(value) => setFilter({ ...filter, price: value })}
        />
      </div>
      <div className="navLeft__reset">
        <Button
          icon={<ClearOutlined />}
          onClick={() =>
            setFilter({
              category: [],
              price: [0, 100],
              search: "",
            })
          }
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default NavLeft;
