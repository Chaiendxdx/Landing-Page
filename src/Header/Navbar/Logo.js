import banner from "../../Image/T1B9hfXcdvXXXXXXXX.svg";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
export default function Logo() {
  return (
    <Container>
      <Row align="middle">
        <Col span={4}>
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

          {/* <img src={banner} alt="logo" /> */}
        </Col>
        <Col span={20} className="col-text">
          <Typography className="text-brand">
            <a href="#0">FishEye</a>
          </Typography>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  svg {
    height: 80px;
    width: 40px;
    transform: translateY(2%) translateX(-20%);
  }
  .col-text {
    border-right: 1px solid black;
    .text-brand {
      a {
        color: #108ee9;
        text-transform: uppercase;
        font-size: 16px;
      }
    }
  }
`;
