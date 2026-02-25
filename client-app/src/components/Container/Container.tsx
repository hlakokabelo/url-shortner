import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import UrlDisplay from "../UrlDisplay";
import { getAllUrl } from "../../util/dbServices.js";
interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  interface Idata {
    fullUrl: string;
    clicks: number;
    shortId: string;
  }
  const [data, setData] = React.useState<Idata[]>([]);
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setData(await getAllUrl());
  };
  return (
    <div className="flex flex-row">
      <FormContainer />

      <div className=" flex-col w-7/8 m-2 justify-center mt-8 sm:absolute sm:bottom-0">
        <h2 className="text-3xl mb-2 text-slate-950">Your Recent Links:</h2>

        <div className="grid gap-2 lg:grid-cols-2 flex-wrap flex-shrink min-w-50">
          {data.map((d) => (
            <UrlDisplay
              fullUrl={d.fullUrl}
              clicks={d.clicks}
              shortId={d.shortId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
