export interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-Blue text-Btntext text-sm rounded-md w-44 h-16 flex items-center justify-center font-semibold border-0 shadow-md lg:text-sm lg:h-11 lg:w-48">
      {text}
    </button>
  );
};

export default Button;
