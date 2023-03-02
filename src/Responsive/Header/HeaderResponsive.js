import styled from "styled-components";
import Hero from "../Hero";
import Navbar from "../Navbar/Navbar";
export default function HeaderResponsive() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
}

const Container = styled.div``;
