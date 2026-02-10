import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="md:mt-16 pt-8 pb-20 bg-transparent " id="experience">
      <h1 className="text-center text-5xl mt-8 text-black">Work Experience</h1>

      {/* Experience 1 */}
      <div className="max-w-6xl mx-2 sm:mx-auto  p-8 mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">Full Stack Developer Intern</h2>
          <div className="flex text-zinc-600 mt-1 text-right ">
            <SlCalender className="mt-1" />
            <p className="ml-2"> May 2025 - Present</p>
            <span className="text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2">
          <FaRegBuilding className="mt-1" />
          <p className="font-medium mr-2 ml-2">Ideaforage Innovations</p>
          {/* <FaLocationDot className="mt-1" /> */}
          {/* <p className="ml-2">Location</p> */}
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black ">
          <li>
            Currently building Toynik’s complete e-commerce website and
            Ideaforage’s static site for brand presence.
          </li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="max-w-6xl mx-2 sm:mx-auto p-8 mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">Full Stack Developer Intern</h2>
          <div className="flex text-zinc-600 mt-1 text-right ">
            <SlCalender className="mt-1" />
            <p className="ml-2"> May 2025 – Jan 2026</p>
            <span className="text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2">
          <FaRegBuilding className="mt-1" />
          <p className="font-medium mr-2 ml-2">EntrePi</p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black ">
          <li>
            Built and launched Mitochondria, a microlearning app, enhancing user
            engagement and knowledge sharing.
          </li>
        </ul>
      </div>

      {/* Experience 3 */}
      <div className="max-w-6xl mx-2 sm:mx-auto p-8 mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">React Developer</h2>
          <div className="flex text-zinc-600 mt-1 text-right ">
            <SlCalender className="mt-1" />
            <p className="ml-2"> May 2025 – July 2025</p>
            <span className="text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2">
          <FaRegBuilding className="mt-1" />
          <p className="font-medium mr-2 ml-2">Celebal Technologies</p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black ">
          <li>
            Developed a secure File Transfer Application to streamline
            enterprise data exchange.
          </li>
        </ul>
      </div>

      {/* Experience 4 */}
      <div className="max-w-6xl mx-2 sm:mx-auto p-8 mt-16 bg-white text-black rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">Web Developer</h2>
          <div className="flex text-zinc-600 mt-1 text-right ">
            <SlCalender className="mt-1" />
            <p className="ml-2"> May 2024 - July 2024</p>
            <span className="text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
              Remote
            </span>
          </div>
        </div>
        <div className="flex text-blue-600 mt-2">
          <FaRegBuilding className="mt-1" />
          <a
            href={"http://vlab.iitr.ac.in/index.html"}
            rel="noreferrer"
            className="font-medium mr-2 ml-2"
          >
            Virtual Labs, IIT Roorkee
          </a>
          <FaLocationDot className="mt-1" />
          <p className="ml-2">Roorkee</p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-black ">
          <li>
            Developed an Electrical Circuit Design Lab, enabling simulations for cross-departmental use
          </li>
          <li>
            Built interactive and intuitive simulations using HTML, CSS, JavaScript, jsPlumb, Bootstrap & Sweetalert
          </li>
          <li>
            Engineered multiple experiments like motor control circuits, logic gates & relay switching mechanisms
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
