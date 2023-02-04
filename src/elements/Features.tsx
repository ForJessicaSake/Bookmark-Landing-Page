const Features: React.FC = () => {
  return (
    <section id="features" className="flex flex-col justify-center items-center pt-14">
      <h1 className="lg:text-2xl text-3xl font-bold py-4 text-Heading">
        Features
      </h1>
      <p className=" text-base lg:text-base text-text text-center w-wd leading-7 lg:w-wdd lg:leading-8">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <aside className="py-10 w-96 lg:w-Featureswidth lg:flex lg:justify-center lg:items-center text-text lg:text-base">
      <ul className="lg:flex lg:justify-evenly cursor-pointer lg:border-b-2 lg:border-Gray px-0 lg:w-Featureswidth lg:font-semibold flex justify-center lg:flex-row flex-col items-center w-full">
        <li className=" text-zinc-600 border-y-2 border-Gray lg:border-y-0 lg:border-b-2 lg:border-downBtn py-4 w-full text-center">
            Simple Bookmarking
          </li>
          <li className="py-4  w-full text-center">Speedy Searching</li>
          <li className="border-y-2 lg:border-y-0 border-Gray py-4 lg:py-0  w-full text-center">
            Easy Sharing
          </li>{" "}
        </ul>
      </aside>
    </section>
  );
};

export default Features;
