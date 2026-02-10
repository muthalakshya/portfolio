import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Experiences = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-transparent py-20 px-4"
      id="experience"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
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
            <button
              onClick={() => window.open("https://ideaforage.com", "_blank")}
              className="font-medium ml-2 text-base sm:text-lg"
            >
              Ideaforage Innovations
            </button>
          </div>
          <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
            <li>
              Built the company introduction website (ideaforage.com) using
              React.js & Tailwind CSS.
            </li>
            <li>
              Developed a MERN-based e-commerce platform for Toynik (toynik.com)
              as a solo developer.
            </li>
            <li>
              Implemented JWT-based authentication, PhonePe payment gateway, and
              Delhivery API for logistics.
            </li>
            <li>
              Created a separate admin panel for managing products, orders,
              users, and delivery workflows.
            </li>
            <li>Deployed both applications on Vercel.</li>
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
            <button
              onClick={() => window.open("https://entrepi.world", "_blank")}
              className="font-medium ml-2 text-base sm:text-lg"
            >
              EntrePi
            </button>
          </div>
          <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
            <li>
              Developed multiple microlearning and assessment platforms under
              the Mitochondria startup focused on improving critical thinking.
            </li>
            <li>
              Built student, teacher, and public-facing applications, including
              landing pages and role-based dashboards.
            </li>
            <li>
              Implemented AI-assisted question and assessment generation mapped
              to CBSE curriculum and syllabus.
            </li>
            <li>
              Integrated automation workflows using n8n for content and question
              generation.
            </li>
            <li>
              Developed and deployed platforms such as SourPickle (tournament
              tracker), Stocks & Ladder (learning game for NSE stocks), and
              Geeta (microlearning app).
            </li>
            <li>
              Worked on end-to-end development, deployment, and iteration of
              multiple production domains.
            </li>
          </ul>
        </div>

        {/* Experience 3 */}
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
            <button
              onClick={() =>
                window.open("http://vlab.iitr.ac.in/index.html", "_blank")
              }
              className="font-medium mx-2 text-base sm:text-lg"
            >
              Virtual Labs, IIT Roorkee
            </button>
            <div className="flex items-center text-sm sm:text-base mt-1 sm:mt-0">
              <FaLocationDot />
              <p className="ml-1">Roorkee</p>
            </div>
          </div>
          <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
            <li>
              Developed an Electrical Circuit Design Lab enabling interactive
              simulations for cross-departmental academic use.
            </li>
            <li>
              Built intuitive and interactive circuit simulations using HTML,
              CSS, JavaScript, jsPlumb, Bootstrap, and SweetAlert.
            </li>
            <li>
              Engineered simulations for motor control circuits, logic gates,
              and relay-based switching mechanisms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
