import React from "react";
import HeroImage from "../assets/illustration-hero.svg";
import Button from "../components/button/CustomButton";
import GrayButton from "../components/button/GrayButton";
const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-center mt-36 lg:flex-row lg:flex-row-reverse lg:px-14 lg:justify-between">
      <section className="relative h-52 ">
        <figure className="bg-Blue w-80 h-44 rounded-l-full relative left-10 lg:left-24 lg:h-56 lg:w-wth">
        </figure>
        <img
          src={HeroImage}
          alt="bookmark"
          className="relative lg:w-wth w-80 lg:h-80 h-64 z-10 bottom-64 lg:bottom-80"
        />
      </section>

      <section className="flex flex-col items-center justify-center mt-4 text-center lg:text-start lg:items-start">
        <h1 className="text-3xl lg:text-4xl font-bold w-96 text-Heading leading-relaxed lg:leading-10">
          A Simple Bookmark Manager
        </h1>
        <p className="w-wd py-8 lg:py-4 text-base text-text leading-7 lg:text-base lg:w-wth lg:leading-8">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <section className="flex justify-between w-wdh  py-2 lg:w-HeroBtn">
          <Button text="Get it on Chrome" />
          <GrayButton text="Get it on Firefox" />
        </section>
      </section>
    </section>
  );
};
export default Hero;
