import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa6";
import resume from "../assets/Lakshya_Mutha_Resume.pdf";

const stack = ["React", "Node.js", "Express", "MongoDB", "Tailwind"];

const Home = () => {
  return (
    <div
      id="home"
      className="bg-transparent min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <span className="inline-flex items-center gap-2 bg-brand-yellow border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            Open to opportunities
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-tight">
            Hi, I&apos;m <span className="italic">Lakshya Mutha</span>
          </h1>

          <div className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold italic text-zinc-800 min-h-[2.5rem]">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "MERN Stack Engineer",
                "AI Engineer @ Prospire",
              ]}
              typeSpeed={70}
              backSpeed={30}
              backDelay={1500}
              loop
              cursorChar="|"
            />
          </div>

          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-zinc-700 font-medium leading-relaxed">
            I build fast, responsive web apps end to end, from polished React
            interfaces to Node.js APIs and MongoDB, shipping real products for
            e-commerce, education and enterprise teams.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.35)] hover:bg-brand-yellow hover:text-black transition-all duration-300"
            >
              View my work <FaArrowRight />
            </a>
            <a
              href={resume}
              download="Lakshya_Mutha_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="https://github.com/muthalakshya/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 bg-white border-2 border-black rounded-full text-xl hover:bg-brand-yellow transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshyamutha/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-white border-2 border-black rounded-full text-xl hover:bg-brand-yellow transition-colors"
            >
              <FaLinkedin />
            </a>
            <span className="hidden sm:block w-px h-8 bg-black/30 mx-2" />
            {stack.map((t) => (
              <span
                key={t}
                className="text-xs sm:text-sm font-semibold bg-white border border-black rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-yellow border-2 border-black rounded-2xl" />
            <div className="relative bg-zinc-900 text-zinc-100 border-2 border-black rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b-2 border-black">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-zinc-400 font-mono">
                  developer.js
                </span>
              </div>
              <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">lakshya</span> = {"{"}
                  {"\n"}
                  {"  "}role: <span className="text-green-400">"Full Stack Developer"</span>,{"\n"}
                  {"  "}stack: [<span className="text-green-400">"React"</span>,{" "}
                  <span className="text-green-400">"Node"</span>,{" "}
                  <span className="text-green-400">"MongoDB"</span>],{"\n"}
                  {"  "}location: <span className="text-green-400">"Jodhpur, India"</span>,{"\n"}
                  {"  "}currently: <span className="text-green-400">"Prospire Technology"</span>,{"\n"}
                  {"  "}openToWork: <span className="text-orange-400">true</span>,{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
            <span className="absolute -top-5 -right-3 bg-white border-2 border-black rounded-lg px-3 py-1 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-6">
              React
            </span>
            <span className="absolute -bottom-6 -left-3 bg-white border-2 border-black rounded-lg px-3 py-1 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-6">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
