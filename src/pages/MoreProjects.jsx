import React from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const moreProjectsData = [
  {
    category: "Startup & Product Experiments",
    projects: [
      {
        title: "SourPickle",
        description:
          "Tournament tracking platform with complete match & leaderboard management.",
        github: "", // Assuming no link or private for now
        live: "https://app.sourpickle.in",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750647/6bb44988-d470-4aa0-9f33-7a58b4d71e83.png",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750717/30495435-859d-413b-a86f-90a49dfe1fd0.png",
        ],
      },
      {
        title: "Stocks & Ladder",
        description:
          "A gamified learning platform that helps users compare companies based on key financial metrics and rankings.",
        github: "",
        live: "https://www.stocksandladder.com",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750257/a8ccb24d-b81f-4718-a0d3-6b2ed3cf98c4.png",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750243/563670fc-1d1d-4d27-967f-476e49fa939d.png",
        ],
      },
      {
        title: "Geeta – Microlearning App",
        description:
          "Educational microlearning app focused on structured content delivery.",
        github: "",
        live: "https://www.lifelonglearning.world",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750763/a455fa80-a36f-440b-a85e-a44f18818923.png",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770750807/ca083b92-6a5c-4588-bba1-a40260e13049.png",
        ],
      },
    ],
  },
  {
    category: "Frontend & UI Projects",
    projects: [
      {
        title: "Banking Website",
        description:
          "Modern single-page banking UI built using React & Tailwind.",
        github: "https://github.com/muthalakshya/bank_modern_app",
        live: "https://lakshya-mutha.netlify.app/",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747244/proj2a_j9lpk0.jpg",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747244/proj2b_xnso1n.jpg",
        ],
      },
      {
        title: "Myntra Clone",
        description: "UI recreation of Myntra homepage with responsive layout.",
        github: "https://github.com/muthalakshya/myntra",
        live: "https://timely-torrone-201ad9.netlify.app/",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747260/proj5a_ctwneg.jpg",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747261/proj5b_jkasnj.jpg",
        ],
      },
      {
        title: "Netflix Clone",
        description: "Netflix-style landing page built using React & Tailwind.",
        github: "https://github.com/muthalakshya/netflix",
        live: "https://luxury-travesseiro-068786.netlify.app/",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747245/proj3a_gwlwkf.jpg",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747245/proj3b_hig91c.jpg",
        ],
      },
      {
        title: "PI Logistic",
        description:
          "Corporate logistics website built with HTML, Bootstrap & JavaScript.",
        github: "https://github.com/muthalakshya/pilogistics",
        live: "https://adorable-treacle-e876a2.netlify.app/",
        images: [
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747246/proj4a_st2yqo.jpg",
          "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747264/proj4b_xznnhs.jpg",
        ],
      },
    ],
  },
];

const MoreProjects = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
          More Projects
        </h1>

        {moreProjectsData.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 border-b-2 border-brand-yellow pb-2 w-fit">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                    <p className="text-zinc-600 mb-4 text-sm">
                      {proj.description}
                    </p>
                    {proj.images && proj.images.length > 0 && (
                      <div className="mb-4 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={proj.images[0]}
                          alt={proj.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {proj.github && (
                      <button
                        onClick={() => window.open(proj.github, "_blank")}
                        className="text-sm font-bold text-white bg-black px-4 py-2 rounded transition-transform hover:scale-105 flex items-center gap-2"
                      >
                        <FaGithub /> GitHub
                      </button>
                    )}
                    {proj.live && (
                      <button
                        onClick={() => window.open(proj.live, "_blank")}
                        className="text-sm font-bold text-black bg-brand-yellow px-4 py-2 rounded transition-transform hover:scale-105"
                      >
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block text-lg font-bold text-white bg-black px-8 py-3 rounded-full shadow-lg hover:bg-brand-yellow hover:text-black transition-all"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
