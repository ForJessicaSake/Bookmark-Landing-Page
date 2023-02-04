import Button from "../components/button/CustomButton";
import BookmarkImage from "../assets/illustration-bookmark.svg";
const Bookmark: React.FC = () => {
  return (
    <section id="bookmark"className="flex flex-col lg:flex-row lg:flex lg:justify-between items-center">
      <section className="relative h-52 mt-24 lg:w-6/12">
        <figure className="bg-Blue w-width h-44 rounded-r-full relative right-24 lg:h-80 lg:w-wdd">
          {" "}
        </figure>
        <img
          src={BookmarkImage}
          alt="boomark"
          className="relative w-96 h-52 z-10 bottom-64 lg:bottom-96 lg:left-14 lg:w-wdd lg:h-80"
        />
      </section>
      <section className="lg:w-5/12 lg:text-start flex flex-col justify-center items-center lg:justify-start lg:items-start lg:pt-20">
        <h1 className="lg:text-2xl text-3xl text-heading font-bold lg:px-0 px-4">
          Bookmark in one click
        </h1>
        <p className="w-wd lg:w-96 lg:leading-8 text-text lg:text-base mt-4 leading-7 text-center lg:text-start text-base mb-4">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <section className="hidden lg:block">
          <Button text="More Info" />
        </section>
      </section>
    </section>
  );
};

export default Bookmark;
