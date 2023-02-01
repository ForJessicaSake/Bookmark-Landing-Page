import React from "react";
interface CTA {
  text: string;
}

const CallToAction: React.FC<CTA> = ({ text }) => {
  return (
    <button className="w-80 lg:w-28 lg:h-10 shadow-md h-16 lg:ml-6 bg-downBtn rounded-md font-semibold">
      {text}
    </button>
  );
};

export default CallToAction
