import Button from "./button/CustomButton";
import dot from "../assets/bg-dots.svg"

interface ExtensionProps {
  extensionImage: any;
  extensionName: string;
  extensionVersion: string;
}

const Card: React.FC<ExtensionProps> = ({
  extensionImage,
  extensionName,
  extensionVersion,
}) => {
  return (
    <section>
      <section className="lg:w-64 lg:h-80 h-hd w-72 flex flex-col items-center justify-center shadow-xl rounded-lg">
        <img
          src={extensionImage}
          alt="browser extension"
          className="h-28 w-28"
        />
        <h4 className="pt-6 font-bold lg:text-base text-2xl">
          {extensionName}
        </h4>
        <p className=" text-lg lg:text-sm pt-2 pb-8 w-64 text-center text-text">
          {extensionVersion}
        </p>
        <img src ={dot} alt='dots'/>
        <section className="pt-6">
          <Button text="Add & Install Extension" />
        </section>
      </section>
    </section>
  );
};

export default Card;
