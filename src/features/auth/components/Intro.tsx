// import IntroImage from "@/assets/Auth/Logo.svg";
import { i18n } from "@/i18n";

function Intro() {
  const rtl = i18n.getLanguage() === "ar";

  return (
    <div className="relative bg-Main md:h-screen h-87.5 flex flex-col items-center justify-center">
      <img src={""} alt="Intro Image" className="w-40 mb-8" />
      <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
        Welcome To
      </h1>
      <h2 className="text-white text-4xl md:text-7xl font-bold">AIRGATE</h2>
      <div className={`absolute top-4 ${rtl ? "right-1" : "left-1"}`}>
      </div>
    </div>
  );
}

export default Intro;
