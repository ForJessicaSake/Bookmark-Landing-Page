import logoChrome from "../assets/logo-chrome.svg";
import logoFirefox from "../assets/logo-firefox.svg";
import logoOpera from "../assets/logo-opera.svg";
import Card from "../components/Card";

const Extension: React.FC = () => {
  return (
    <section id="extension" className="lg:pt-48 pt-20 px-4 lg:px-0">
      <section className="flex flex-col justify-center items-center text-center">
        <h1 className="text-Heading lg:text-2xl text-3xl font-bold w-96 lg:px-0 px-2">
          Download the extension
        </h1>
        <p className="w-wd pb-12 lg:w-Extensionwidth text-base leading-7 text-text text-center py-6">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:px-32 pt-2">
        <Card
          extensionImage={logoChrome}
          extensionName="Add to Chrome"
          extensionVersion="Minimum version 62"
        />
        <div className="pt-8">
          <Card
            extensionImage={logoFirefox}
            extensionName="Add to Firefox"
            extensionVersion="Minimum version 55"
          />
        </div>
        <div className="pt-20">
          <Card
            extensionImage={logoOpera}
            extensionName="Add to Opera"
            extensionVersion="Minimum version 46"
          />
        </div>
      </section>
    </section>
  );
};

export default Extension;
