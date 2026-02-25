import * as React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { getAppName } from "./util/utils";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <body className="bg-slate-400" />
      <title>{getAppName()}</title>

      <Header />
      <Container />
    </>
  );
};

export default App;
