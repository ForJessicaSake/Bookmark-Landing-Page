import facebookImage from "../assets/icon-facebook.svg";
import twitterImage from "../assets/icon-twitter.svg";

const Footer: React.FC = () => {
  return (
    <footer className=" cursor-pointer flex flex-col lg:flex-row lg:justify-around items-center justify-center h-96 lg:h-20 bg-Footer text-downText">
      <section className="flex items-center flex-col lg:flex-row">
        <a href="#top">
          <h1 className="text-2xl lg:text-lg font-bold tracking-widest lg:mb-0 mb-14 ">
            BOOKMARK
          </h1>
        </a>
        <ul className="flex flex-col lg:flex-row lg:justify-between lg:h-0 lg:w-80 h-32 text-lg lg:text-sm tracking-widest justify-between items-center mb-14 lg:mb-0 lg:ml-12">
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
      </section>

      <figure className="flex justify-between w-32 lg:w-24 items-center">
        <img
          src={facebookImage}
          alt="Facebook"
          className="h-8 w-8 lg:h-6 lg:w-6"
        />
        <img
          src={twitterImage}
          alt="Twitter"
          className="h-8 w-8 lg:h-6 lg:w-6"
        />
      </figure>
    </footer>
  );
};

export default Footer;
