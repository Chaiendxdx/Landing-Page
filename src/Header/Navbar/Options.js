import { Button, Space } from "antd";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
export default function Options() {
  return (
    <Container>
      <Space className="site-button-ghost-wrapper" wrap>
        <Button ghost icon={<DownOutlined />} size="small">
          2.1.11
        </Button>

        <Button ghost size="small">
          EN
        </Button>
      </Space>
    </Container>
  );
}

const Container = styled.div``;
