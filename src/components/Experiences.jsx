import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Experiences = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Ideaforage Innovations",
      companyLink: "https://ideaforage.com",
      date: "May 2025 - Present",
      type: "Remote",
      points: [
        "Built the company introduction website (ideaforage.com) using React.js & Tailwind CSS.",
        "Developed a MERN-based e-commerce platform for Toynik (toynik.com) as a solo developer.",
        "Implemented JWT-based authentication, PhonePe payment gateway, and Delhivery API for logistics.",
        "Created a separate admin panel for managing products, orders, users, and delivery workflows.",
        "Deployed both applications on Vercel.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "EntrePi",
      companyLink: "https://entrepi.world",
      date: "May 2025 – Jan 2026",
      type: "Remote",
      points: [
        "Developed multiple microlearning and assessment platforms under the Mitochondria startup focused on improving critical thinking.",
        "Built student, teacher, and public-facing applications, including landing pages and role-based dashboards.",
        "Implemented AI-assisted question and assessment generation mapped to CBSE curriculum and syllabus.",
        "Integrated automation workflows using n8n for content and question generation.",
        "Developed and deployed platforms such as SourPickle (tournament tracker), Stocks & Ladder (learning game for NSE stocks), and Geeta (microlearning app).",
        "Worked on end-to-end development, deployment, and iteration of multiple production domains.",
      ],
    },
    {
      role: "Web Developer",
      company: "Virtual Labs, IIT Roorkee",
      companyLink: "http://vlab.iitr.ac.in/index.html",
      date: "May 2024 - July 2024",
      type: "Remote",
      location: "Roorkee",
      points: [
        "Developed an Electrical Circuit Design Lab enabling interactive simulations for cross-departmental academic use.",
        "Built intuitive and interactive circuit simulations using HTML, CSS, JavaScript, jsPlumb, Bootstrap, and SweetAlert.",
        "Engineered simulations for motor control circuits, logic gates, and relay-based switching mechanisms.",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-transparent py-20 px-4"
      id="experience"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
          Work Experience
        </h1>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="max-w-6xl mx-auto p-4 sm:p-8 mt-12 first:mt-0 bg-white text-black rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-xl sm:text-2xl font-bold">{exp.role}</h2>
              <div className="flex flex-wrap text-zinc-600 mt-2 sm:mt-0 items-center">
                <SlCalender />
                <p className="ml-2 text-sm sm:text-base"> {exp.date}</p>
                <span className="text-xs sm:text-sm ml-4 text-black bg-brand-yellow border border-black px-2 py-1 rounded">
                  {exp.type}
                </span>
              </div>
            </div>
            <div className="flex text-blue-600 mt-2 items-center flex-wrap">
              <FaRegBuilding />
              <button
                onClick={() => window.open(exp.companyLink, "_blank")}
                className="font-medium ml-2 text-base sm:text-lg"
              >
                {exp.company}
              </button>
              {exp.location && (
                <div className="flex items-center text-sm sm:text-base mt-1 sm:mt-0 ml-2">
                  <FaLocationDot />
                  <p className="ml-1">{exp.location}</p>
                </div>
              )}
            </div>
            <ul className="mt-4 list-disc pl-6 marker:text-black text-sm sm:text-base">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
