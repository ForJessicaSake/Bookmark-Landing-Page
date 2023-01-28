import React from "react";
import HeroImage from "../Images/illustration-hero.svg";
import Button from "../ButtonComponents/CustomButton";
import GrayButton from "../ButtonComponents/GrayButton";
const Hero: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-32">
   <section className="relative h-80">
        <figure className="bg-Blue w-wth h-72 rounded-l-full relative left-24"> </figure>
        <img
          src={HeroImage}
          alt="bookmark"
          className="relative w-wdd h-96 z-10 bottom-96"
        />
      </section>

      <section className="flex flex-col items-center justify-center mt-4 text-center">
        <h1 className="text-3xl font-bold w-96 text-Heading leading-10">
          A Simple Bookmark Manager
        </h1>
        <p className="w-72 py-8 ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <section className="flex justify-between w-wd py-2">
          <Button text="Get it on Chrome" />
          <GrayButton text="Get it on Firefox" />
        </section>
      </section>
    </main>
  );
};
export default Hero;
