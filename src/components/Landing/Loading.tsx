import React from "react";
import  Logo  from "../Images/Logo";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <section className="flex flex-col w-7/12 m-auto overflow-hidden rounded-lg shadow-md bg-sunnyYellow xxxl:mt-20 xxxl:h-2/5 h-4/6 xxxl:w-2/6 xxl:w-3/6 sm:w-4/5 xl:h-3/5 md:h-screen">
      <Logo margin={"m-auto"} />
      <h1 className="flex justify-center w-full m-auto text-xl text-petrol">
        Loading. Please wait.
      </h1>
    </section>
  );
};
