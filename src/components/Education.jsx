import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      year: "2026",
      degree: "Bachelor of Technology (Data Science)",
      institute: "Jodhpur Institute of Engineering & Technology, Jodhpur",
      performance: "9.82 CGPA",
    },
    {
      year: "2022",
      degree: " Senior Secondary (12th)",
      institute: "Laxmi Devi Mundra Public School, Jodhpur",
      performance: "89.8%",
    },
    {
      year: "2020",
      degree: "Secondary (10th)",
      institute: "Laxmi Devi Mundra Public School, Jodhpur",
      performance: "74.6%",
    },
  ];

  return (
    <div
      id="education"
      className="md:mt-16 pt-8 pb-20 bg-transparent px-4 sm:px-10"
    >
      <h1 className="text-center text-3xl sm:text-5xl mt-8 text-black mb-16">
        Education
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 sm:p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-brand-yellow border border-black rounded-full hidden sm:block">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{edu.degree}</h2>
                <p className="text-lg font-medium text-zinc-700">
                  {edu.institute}
                </p>
                <div className="sm:hidden mt-2 text-sm font-bold bg-brand-yellow border border-black px-3 py-1 rounded-full w-fit">
                  {edu.year}
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end">
              <div className="hidden sm:block text-lg font-bold bg-brand-yellow border border-black px-4 py-1 rounded-full mb-2">
                {edu.year}
              </div>
              <p className="text-lg font-bold border-b-2 border-brand-yellow">
                {edu.performance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
