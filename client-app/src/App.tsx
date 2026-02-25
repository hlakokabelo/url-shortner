import * as React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>

      <Header />
      <Container />
    </>
  );
};

export default App;
