import CallToAction from "../components/button/CallToAction";

const Contact:React.FC = () => {
  return (
    <section id="contact" className="flex flex-col h-96 justify-center items-center mt-20 bg-down w-screen text-downText px-2">
      <h4 className="text-lg font-semibold tracking-widest pb-4">
        35,000 + ALREADY JOINED
      </h4>
      <h1 className="text-3xl lg:text-2xl lg:w-96 text-center font-semibold leading-10 pb-6">
        Stay up-to-date with what we're doing
      </h1>
      <form className="flex flex-col lg:flex-row lg:flex lg:w-Downwidth lg:text-sm lg:justify-between">
        <input
          placeholder="Enter your email address"
          className="w-80 rounded-md h-16 lg:h-10 lg:w-96 px-6 mb-6 text-black"
        />
        <CallToAction text="Contact Us"/>
      </form>
    </section>
  );
};

export default Contact;
