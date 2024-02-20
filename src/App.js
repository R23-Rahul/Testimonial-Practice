import React from "react";
import Testimonials from "./components/Testimonials";
import Card from "./components/Card";

import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-600">
      <div className="text-center">
        
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
