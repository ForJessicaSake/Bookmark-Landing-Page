import React from "react";
 export interface Value {
  text: string;
}
const Button: React.FC<Value> = ({ text  }) => {
  return <button className="bg-Blue text-Btntext text-base rounded-md w-40 h-16 flex items-center justify-center font-semibold border-0 shadow-md lg:text-sm lg:h-12 lg:w-44">{text}</button>;
};

export default Button;
