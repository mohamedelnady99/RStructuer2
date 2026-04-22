import IntroImage from "@/assets/IntroImage.jpg";

function Intro() {
  return (
    <div className="bg-[#002819] md:h-screen //h-[350px] flex flex-col items-center justify-center">
      <img
        src={IntroImage}
        alt="CamelTrack"
        className="w-80% //mb-8 object-cover"
      />
      {/* <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
        Welcome To
      </h1>
      <h2 className="text-[#D4AF37] text-4xl md:text-7xl font-bold">
        CamelTrack
      </h2> */}
    </div>
  );
}

export default Intro;
