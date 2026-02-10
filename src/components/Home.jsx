import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-transparent min-h-screen flex items-center justify-center pt-32"
    >
      <div className="sm:place-content-center p-4 sm:p-0 backhome text-center flex flex-col justify-center items-center w-full">
        <div className="sm:text-6xl text-3xl md:text-5xl text-center font-bold italic text-black">
          <ReactTyped
            strings={["Crafting Code, Breathing Innovation."]}
            typeSpeed={100}
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </div>
        <div className="sm:text-3xl text-base md:text-2xl mt-5 text-center italic text-zinc-800">
          <ReactTyped
            strings={["Turning ideas into experiences, one line at a time."]}
            typeSpeed={100}
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </div>
        <div className="sm:text-xl text-base md:text-lg mt-10 text-center italic">
          <a
            href="#about"
            className="bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-brand-yellow hover:text-black transition-all duration-300"
          >
            Know more.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
