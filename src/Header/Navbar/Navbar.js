import { Col, Row } from "antd";
import styled from "styled-components";

import Logo from "./Logo";
import Options from "./Options";
import SelectInput from "./SelectInput";

import MenuItem from "./MenuItem";
export default function Navbar() {
  return (
    <Container>
      <Row align="middle">
        <Col span={4} style={{ height: "100%" }}>
          <Logo />
        </Col>
        <Col span={7} style={{ height: "100%" }}>
          <SelectInput />
        </Col>
        <Col span={10} style={{ height: "100%" }}>
          <MenuItem />
        </Col>
        <Col span={3} style={{ height: "100%" }}>
          <Options />
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
  padding: 0 48px;
`;
