import React, { useEffect, useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { Drawer } from "antd";

const DrawerCustom = ({ openDrawer, titleDrawer, children, closeDrawer }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(openDrawer);
  }, [openDrawer]);
  return (
    <Drawer
      open={open}
      closeIcon={<RightOutlined />}
      onClose={closeDrawer}
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
  closeDrawer: PropTypes.func,
};

DrawerCustom.defaultProps = {
  openDrawer: false,
  titleDrawer: "",
  children: null,
  closeDrawer: () => {},
};

export default DrawerCustom;
