import * as React from "react";
import { LuBookCopy } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
interface IUrlDisplayProps {
  fullUrl: string;
  clicks: number;
  shortId: string;
}

const UrlDisplay: React.FunctionComponent<IUrlDisplayProps> = ({
  fullUrl,
  clicks,
  shortId,
}) => {

  const icon = `https://www.google.com/s2/favicons?domain=${fullUrl}&sz=32`;
  return (
    <div className="grid w-full grid-cols-6 gap-0 items-center justify-start p-4 border rounded-lg shadow-md">
      <img src={icon} alt="image" className="col-span-1" />
      <div className="text-justify col-span-3 mr-4">
        <a className="cursor-pointer" href={fullUrl}>
          http://localhost:3000/{shortId}
        </a>
        <p className="overflow-ellipsis overflow-hidden text-pink-700">
          {fullUrl}
        </p>
      </div>
      <div className="flex gap-4">
        <p
          className="cursor-pointer"
          onClick={() => {
            alert("del");
          }}
        >
          <MdDelete />
        </p>
        <p className="cursor-pointer" onClick={() => {}}>
          <MdModeEdit />
        </p>
        <p className="cursor-pointer" onClick={() => {}}>
          <LuBookCopy />
        </p>
        <div className="text-center text-slate-800">
          <p>clicks</p>
          <p>{clicks}</p>
        </div>
      </div>
    </div>
  );
};

export default UrlDisplay;
