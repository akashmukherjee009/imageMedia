import React from "react";
import { SiTicktick } from "react-icons/si";

const PriceCard = (props) => {
  return (
    <center>
      <div data-aos="fade-up" className="bg-primary w-[80%] h-auto md:h-auto lg:h-[85%] flex flex-col justify-between bg-white text-primary-foreground p-4 m-2 border-gray-200 rounded-lg shadow-md">
        <h2 className="w-full text-center text-xl md:text-xl lg:text-4xl font-semibold text-[#00e0bf]">
          {props.name}
        </h2>
        <p className="text-2xl font-semibold m-4 h-[10%]">{props.price}</p>
        <p className="text-md m-4 h-[10%]">{props.description}</p>

        <ul className="text-sm m-4 h-[40%] text-primary-foreground">
          {props.pricingDetails.map((detail, index) => (
            <li
              key={index}
              className="mb-1 w-full flex gap-2 justify-start items-center"
            >
              <span className="text-[#00e0bf]"><SiTicktick /></span> {detail}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 m-4">
          <button className="bg-primary-foreground text-primary rounded-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground border-2 border-[#00e0bf]">
            Get Started
          </button>
          <button className="bg-primary-foreground text-primary rounded-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground border-2 border-white text-white bg-[#00e0bf]">
            Contact Us
          </button>
        </div>
      </div>
    </center>
  );
};

export default PriceCard;
