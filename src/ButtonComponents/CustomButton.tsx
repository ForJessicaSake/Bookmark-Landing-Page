import React from "react";
 export interface Value {
  text: string;
}
const Button: React.FC<Value> = ({ text  }) => {
  return <button className="bg-Blue text-Btntext rounded-md p-3 w-40 font-semibold border-0">{text}</button>;
};

export default Button;
