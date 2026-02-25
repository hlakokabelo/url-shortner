import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-800 h-12">
      <div className="container p-2 mx-auto">
        
          <div className="text-base text-white">UrlShortner</div>
        
      </div>
    </div>
  );
};

export default Header;
