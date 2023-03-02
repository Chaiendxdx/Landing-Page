import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const items = [
  //   {
  //     label: (
  //       <a href="#1" target="_blank" rel="noopener noreferrer">
  //         Home
  //       </a>
  //     ),
  //     key: "home",
  //   },
  //   {
  //     label: (
  //       <a href="#2" target="_blank" rel="noopener noreferrer">
  //         Guidelines
  //       </a>
  //     ),
  //     key: "guidelines",
  //   },
  //   {
  //     label: (
  //       <a href="#3" target="_blank" rel="noopener noreferrer">
  //         Components
  //       </a>
  //     ),
  //     key: "components",
  //   },
  //   {
  //     label: (
  //       <a href="#4" target="_blank" rel="noopener noreferrer">
  //         Patterns
  //       </a>
  //     ),
  //     key: "patterns",
  //   },
  //   {
  //     label: (
  //       <a href="#5" target="_blank" rel="noopener noreferrer">
  //         Resources
  //       </a>
  //     ),
  //     key: "resources",
  //   },
];

export function ColappseModal() {}
export default function CollapseButton() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 0,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          backgroundColor: "transparent",

          marginBottom: 16,
        }}
      >
        <FaBars style={{ fontSize: "16px" }} />
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}
