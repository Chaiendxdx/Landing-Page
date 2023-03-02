import { BarsOutlined } from "@ant-design/icons";
import { Col, Collapse, Row, Typography } from "antd";
import styled from "styled-components";
import banner from "../../Image/T1B9hfXcdvXXXXXXXX.svg";
import CollapseButton from "./CollapseButton";
const { Panel } = Collapse;
export default function Navbar() {
  return (
    <Container>
      <Row align="middle" justify="center">
        <Col span={22} className="col-text">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- background --> */}
            <circle cx="50" cy="50" r="45" fill="#108ee9" />

            {/* <!-- fish tail --> */}
            <path d="M 10 50 Q 45 75 80 50 Q 50 30 10 50" fill="#FFFFFF" />

            {/* <!-- fish body --> */}
            <path d="M 20 50 Q 50 70 80 50 Q 50 30 20 50" fill="#BFEFFF" />

            {/* <!-- eye --> */}
            <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
            <circle cx="50" cy="50" r="5" fill="#008080" />
            <circle cx="53" cy="47" r="2" fill="#FFFFFF" />
          </svg>
          <Typography className="text-brand">
            <a href="#0">ant design</a>
          </Typography>
        </Col>
        <Col span={2}>
          <CollapseButton />
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

  svg {
    height: 80px;
    width: 40px;
    float: right;
  }

  .col-text {
    display: flex;
    align-items: center;
    justify-content: center;
    .text-brand {
      a {
        color: #108ee9;
        text-transform: uppercase;
        font-size: 16px;
      }
    }
  }
`;
