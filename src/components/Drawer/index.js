import React, { useEffect, useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { Drawer } from "antd";

const DrawerCustom = ({ openDrawer, titleDrawer, children }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(openDrawer);
  }, [openDrawer]);
  return (
    <Drawer
      open={open}
      closeIcon={<RightOutlined />}
      onClose={() => setOpen(false)}
      placement="right"
      width={400}
      title={titleDrawer}
    >
      {children}
    </Drawer>
  );
};

DrawerCustom.propTypes = {
  openDrawer: PropTypes.bool,
  titleDrawer: PropTypes.string,
  children: PropTypes.node,
};

DrawerCustom.defaultProps = {
  openDrawer: false,
  titleDrawer: "",
  children: null,
};

export default DrawerCustom;
