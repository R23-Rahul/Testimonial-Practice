import React, { useState } from "react";
import Card from "./Card";
import  {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import { FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const Testimonials=(props)=>{
let reviews=props.reviews;
const [index,setIndex]=useState(0);

function leftShiftHandler(){
if(index-1<0){
    setIndex(reviews.length-1);
}
else
   { setIndex(index-1)}

}

function rightShiftHandler(){
    if(index  + 1  >= reviews.length){
        setIndex(0);
    }
    else
       { setIndex(index + 1);
    }
    
    }



function surpriseHandler(){
let randomIndex= Math.floor(Math.random()*reviews.length);
setIndex(randomIndex);
}

return(
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card className="cd" reviews={reviews[index]}></Card>
     

          <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto ">
            <button onClick={leftShiftHandler}className="curson-pointer  hover :text-violet-500">
               <FiChevronLeft/>
            </button>

            <button onClick={rightShiftHandler} className="curson-pointer  hover :text-violet-500">
                <FiChevronRight/>
            </button>
          </div>

          <div >
            <button onClick={surpriseHandler}className="last-button">
            Surprise Me
            </button>
          </div>
    </div>
)
}
export default Testimonials