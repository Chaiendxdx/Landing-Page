import { Button } from "antd";
import styled from "styled-components";
import img from "../Image/A_pKz3TabovrEAAAAAAAAAAABkARQnAQ.png";
export default function Hero() {
  return (
    <Container>
      <div className="introduce">
        <div className="introduce-text">
          <h2>
            ANT <span>DESIGN</span>
          </h2>
          <p>一个 UI 设计语言</p>
        </div>
        <div className="introduce-btn">
          <Button type="primary" ghost className="btn">
            设计规范
          </Button>
          <Button type="primary" ghost className="btn">
            开发指引
          </Button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  position: absolute;
  .introduce {
    width: 260px;
    height: 200px;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    .introduce-text {
      margin: 16px 0;
      float: right;
      padding-right: 16px;
      border-right: 1px solid black;

      h2 {
        font-size: 40px;
        span {
          color: #ff3171;
        }
      }
      p {
        text-align: end;
        font-size: 16px;
      }
    }
    .introduce-btn {
      float: right;
      padding-right: 16px;
      .btn {
        margin: 0 4px;
        &:hover {
          background-color: blue;
          color: white;
        }
      }
    }
  }
`;
