import React from "react";

interface GrayValue {
  text: string;
}

const GrayButton:React.FC <GrayValue> = ({text}) => {
  return(
    <button className="bg-Gray text-Ash rounded-md p-3 w-40 font-semibold border-0">{text}</button>
    )
};

export default GrayButton;
