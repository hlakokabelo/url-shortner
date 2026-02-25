import * as React from "react";

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = () => {
  return (
    <div className="fixed w-full h-full inset-0 flex flex-col items-center justify-center bg-white text-center p-4">
      <h1 className="text-8xl font-black text-teal-700">404</h1>
      <p className="text-xl font-semibold text-gray-800 mt-2">Link not found</p>
      <p className="text-sm  text-gray-400 mt-1">
        The short code you entered doesn't exist or has expired.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Create a new link
      </a>
    </div>
  );
};

export default NotFound;
