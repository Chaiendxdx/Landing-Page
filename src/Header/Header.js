import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Hero from "./Hero";

export default function Header() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  position: relative;
`;
