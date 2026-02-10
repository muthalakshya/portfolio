import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Experiences = () => {
  return (
    <div
      className="md:mt-16 pt-8 pb-20 bg-transparent px-4 sm:px-10"
      id="experience"
    >
      <h1 className="text-center text-3xl sm:text-5xl mt-8 text-black">
        Work Experience
      </h1>

      {/* Experience 1 */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 mt-12 sm:mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            Full Stack Developer Intern
          </h2>
          <div className="flex flex-wrap text-zinc-600 mt-2 sm:mt-0 items-center">
            <SlCalender />
            <p className="ml-2 text-sm sm:text-base"> May 2025 - Present</p>
            <span className="text-xs sm:text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2 items-center">
          <FaRegBuilding />
          <p className="font-medium ml-2 text-base sm:text-lg">
            Ideaforage Innovations
          </p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
          <li>
            Currently building Toynik’s complete e-commerce website and
            Ideaforage’s static site for brand presence.
          </li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 mt-12 sm:mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            Full Stack Developer Intern
          </h2>
          <div className="flex flex-wrap text-zinc-600 mt-2 sm:mt-0 items-center">
            <SlCalender />
            <p className="ml-2 text-sm sm:text-base"> May 2025 – Jan 2026</p>
            <span className="text-xs sm:text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2 items-center">
          <FaRegBuilding />
          <p className="font-medium ml-2 text-base sm:text-lg">EntrePi</p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
          <li>
            Built and launched Mitochondria, a microlearning app, enhancing user
            engagement and knowledge sharing.
          </li>
        </ul>
      </div>

      {/* Experience 3 */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 mt-12 sm:mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl sm:text-2xl font-bold">React Developer</h2>
          <div className="flex flex-wrap text-zinc-600 mt-2 sm:mt-0 items-center">
            <SlCalender />
            <p className="ml-2 text-sm sm:text-base"> May 2025 – July 2025</p>
            <span className="text-xs sm:text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2 items-center">
          <FaRegBuilding />
          <p className="font-medium ml-2 text-base sm:text-lg">
            Celebal Technologies
          </p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
          <li>
            Developed a secure File Transfer Application to streamline
            enterprise data exchange.
          </li>
        </ul>
      </div>

      {/* Experience 4 */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 mt-12 sm:mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Web Developer</h2>
          <div className="flex flex-wrap text-zinc-600 mt-2 sm:mt-0 items-center">
            <SlCalender />
            <p className="ml-2 text-sm sm:text-base"> May 2024 - July 2024</p>
            <span className="text-xs sm:text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2 items-center flex-wrap">
          <FaRegBuilding />
          <a
            href="http://vlab.iitr.ac.in/index.html"
            rel="noreferrer"
            className="font-medium mx-2 text-base sm:text-lg"
          >
            Virtual Labs, IIT Roorkee
          </a>
          <div className="flex items-center text-sm sm:text-base mt-1 sm:mt-0">
            <FaLocationDot />
            <p className="ml-1">Roorkee</p>
          </div>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
          <li>
            Developed an Electrical Circuit Design Lab, enabling simulations for
            cross-departmental use
          </li>
          <li>
            Built interactive and intuitive simulations using HTML, CSS,
            JavaScript, jsPlumb, Bootstrap & Sweetalert
          </li>
          <li>
            Engineered multiple experiments like motor control circuits, logic
            gates & relay switching mechanisms
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
