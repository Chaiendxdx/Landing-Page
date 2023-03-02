import useViewport from "./Custom Hook/useViewport";
import Header from "./Header/Header";
import HeaderResponsive from "./Responsive/Header/HeaderResponsive";

function App() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <>
        <HeaderResponsive />
      </>
    );
  }
  return (
    <>
      <Header />
    </>
  );
}

export default App;
