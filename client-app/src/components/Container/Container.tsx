import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import UrlDisplay from "../UrlDisplay";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  return (
    <>
      <FormContainer />

      <div className="flex-col w-7/8 m-2">
        <h2 className=" justify-center text-center text-xl mb-1 text-slate-950">
          
          Your Recent Links:
        </h2>
        <div className="grid grid-cols-2 flex-grow flex-shrink">
          <UrlDisplay />
          <UrlDisplay />
          <UrlDisplay />
          
        </div>
      </div>
    </>
  );
};

export default Container;
