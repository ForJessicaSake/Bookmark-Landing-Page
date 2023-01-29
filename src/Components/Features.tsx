const Features: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center pt-14">
      <h1 className="text-2xl font-bold py-4 text-Heading">Features</h1>
      <p className="text-sm lg:text-base text-text text-center w-80 leading-7 lg:w-wdd lg:leading-8">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <aside className="py-10 w-full text-center text-text text-sm lg:text-base">
      <ul className="lg:flex lg:justify-evenly cursor-pointer lg:pb-4 lg:w-full">
        <li className="border-y-2 lg:border-y-0 border-Gray py-4">Simple Bookmarking</li>
        <li className="py-4">Speedy Searching</li>
        <li className="border-y-2 lg:border-y-0 border-Gray py-4">Easy Sharing</li>        </ul>
      </aside>
    
    </main>
  );
};

export default Features;
