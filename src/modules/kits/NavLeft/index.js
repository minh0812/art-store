import { Button, Input, Slider } from "antd";
import { FilterFilled, ClearOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./navLeft.scss";

const NavLeft = () => {
  const [value, setValue] = useState([0, 100]);
  return (
    <div className="navLeft">
      <div className="navLeft__header">
        <h3>Filter</h3>
        <FilterFilled />
      </div>
      <Input placeholder="Search products..." suffix={<SearchOutlined />} />
      <div className="navLeft__price">
        <h3>Price</h3>
        <p>
          From <strong>${value[0]}</strong> to <strong>${value[1]}</strong>
        </p>
        <Slider
          range
          max={1000}
          defaultValue={[0, 1000]}
          tooltip={{ formatter: (value) => `$${value}` }}
          onChange={(value) => setValue(value)}
        />
      </div>
      <div className="navLeft__reset">
        <Button icon={<ClearOutlined />}>Clear All</Button>
      </div>
    </div>
  );
};

export default NavLeft;
