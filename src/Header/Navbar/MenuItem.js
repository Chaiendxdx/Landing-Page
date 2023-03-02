import { Menu } from "antd";
import { useState } from "react";
import styled from "styled-components";
const items = [
  {
    label: (
      <a href="#1" target="_blank" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: "home",
  },
  {
    label: (
      <a href="#2" target="_blank" rel="noopener noreferrer">
        Guidelines
      </a>
    ),
    key: "guidelines",
  },
  {
    label: (
      <a href="#3" target="_blank" rel="noopener noreferrer">
        Components
      </a>
    ),
    key: "components",
  },
  {
    label: (
      <a href="#4" target="_blank" rel="noopener noreferrer">
        Patterns
      </a>
    ),
    key: "patterns",
  },
  {
    label: (
      <a href="#5" target="_blank" rel="noopener noreferrer">
        Resources
      </a>
    ),
    key: "resources",
  },
];
export default function MenuItem() {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Container>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  width: 100%;
  .ant-menu {
    background-color: transparent;
    width: 100%;
    height: 100%;
    line-height: 80px;
    font-size: 16px;
    .ant-menu-item {
      .ant-menu-title-content {
        a {
          color: white;
        }
      }
    }
  }
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-submenu-selected,
  .ant-menu-horizontal > .ant-menu-submenu:hover {
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
  }
  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    border-bottom: none !important;
    transition: none !important;
  }
`;
