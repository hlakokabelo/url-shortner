import * as React from "react";
import { LuBookCopy } from "react-icons/lu";
import { MdDelete } from "react-icons/md";import { MdModeEdit } from "react-icons/md";
interface IUrlDisplayProps {}

const UrlDisplay: React.FunctionComponent<IUrlDisplayProps> = () => {
  const link = "https://strawpoll.ai/list/zVctGZ8uky1R";
  const icon = `https://www.google.com/s2/favicons?domain=${link}&sz=64`;
  return (
    <div className="grid w-full grid-cols-5 gap-0 items-center justify-start p-4 border rounded-lg shadow-md">
      <img src={icon} alt="image" className="col-span-1" />
      <div className="text-justify col-span-3 mr-4">
        <a className="cursor-pointer" href={link}>
          Original URL:
        </a>
        <p>https://www.example.com/very/long/url</p>
      </div>
      <div className="flex gap-4">
        <p className="cursor-pointer"onClick={()=>{alert("del")}}><MdDelete/></p>
        <p className="cursor-pointer"onClick={()=>{}}><MdModeEdit/></p>
        <p className="cursor-pointer" onClick={()=>{}}><LuBookCopy/></p>
      </div>
    </div>
  );
};

export default UrlDisplay;
