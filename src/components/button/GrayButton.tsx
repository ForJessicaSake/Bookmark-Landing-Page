import React from "react";

interface Props {
  text: string;
}

const GrayButton: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-Gray text-Ash rounded-md text-sm w-44 h-16 flex items-center justify-center font-semibold border-0 shadow-md lg:text-sm lg:h-12 lg:w-48">
      {text}
    </button>
  );
};

export default GrayButton;
