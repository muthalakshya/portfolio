import { FaAward, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const certifications = [
    {
      title: "Meta Front-End Developer Specialization",
      issuer: "Coursera",
    },
    {
      title: "Certificate of completion - SQL",
      issuer: "365 Data Science",
    },
    {
      title: "Core Java",
      issuer: "Open Innovations Lab",
    },
    {
      title: "Introduction to Data and Data Science",
      issuer: "365 Data Science",
    },
  ];

  const awards = [
    {
      title: "Overall Branch Topper in B-Tech",
      institution: "JIET, Jodhpur",
    },
    {
      title: "Reliance Foundation Scholar",
      institution: "Reliance Foundation",
    },
    {
      title: "Founder/Coordinator",
      institution: "JIET Entrepreneurship and Start-Up Cell (JESC)",
    },
  ];

  return (
    <div
      id="achievements"
      className="min-h-screen flex flex-col justify-center bg-transparent py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
          Achievements & Certifications
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications Section */}
          <div className="bg-white text-black p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex items-center mb-6 border-b-2 border-black pb-4">
              <FaCertificate className="text-3xl text-black mr-4" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex flex-col border-l-4 border-brand-yellow pl-4"
                >
                  <span className="font-bold text-lg">{cert.title}</span>
                  <span className="text-zinc-600 font-medium">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards Section */}
          <div className="bg-white text-black p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex items-center mb-6 border-b-2 border-black pb-4">
              <FaAward className="text-3xl text-black mr-4" />
              <h2 className="text-2xl font-bold">Awards</h2>
            </div>
            <ul className="space-y-6">
              {awards.map((award, index) => (
                <li
                  key={index}
                  className="flex flex-col border-l-4 border-brand-yellow pl-4"
                >
                  <span className="font-bold text-lg">{award.title}</span>
                  <span className="text-zinc-600 font-medium">
                    {award.institution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
