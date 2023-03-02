import { Select } from "antd";
import styled from "styled-components";
export default function SelectInput() {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Container>
      <Select
        mode="tags"
        style={{
          width: "50%",
        }}
        placeholder="Tags Mode"
        onChange={handleChange}
        options={options}
        className="select"
      />
    </Container>
  );
}
const Container = styled.div`
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
  }
`;
