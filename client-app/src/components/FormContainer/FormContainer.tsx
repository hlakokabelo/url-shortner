import * as React from "react";

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">Url Shortner</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            Past your untidy url
          </p>
          <p className="text-white text-center pb-4">
            Free tool to shorten your long urls, Use our URLshortner to create a
            shortened & neat link.
          </p>
          <form action="">
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute">
                  urlshortner.link/ 
                  <input type="text" placeholder="Enter your long url here" className="block w-full"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
