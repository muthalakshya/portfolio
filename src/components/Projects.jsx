/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const projectsData = [
  {
    title: "Fusion Furnish",
    subtitle: "AI-Powered Home Decor Platform",
    technologies: [
      "React",
      "Tailwind",
      "JWT",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    description:
      "The home decor industry lacks a platform connecting manufacturers, consultants, and homeowners for efficient collaboration.",
    bulletPoints: [
      "Automated backend operations",
      "Curated designs for homeowners",
      "30-minute e-commerce store setup for consultants",
    ],
    github: "https://github.com/muthalakshya/FutureFurnish",
    live: "https://fusion-furnish.vercel.app/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747094/proj0a_lxp36c.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747133/proj0b_kcxtce.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747242/proj0d_f1dsgv.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747243/proj0c_od87cj.jpg"],
  },
  {
    title: "Forever e-com",
    subtitle: "",
    technologies: [
      "React",
      "Tailwind",
      "JWT",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    description: "",
    bulletPoints: [
      "Developed a responsive eCommerce platform with authentication, dynamic product catalogue and secure payments option",
      "Features: cart management, order tracking and admin dashboard",
    ],
    github: "https://github.com/muthalakshya/forever",
    live: "https://forever-frontend-kfcd.onrender.com/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747242/proj1a_ctgsex.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747242/proj1b_zi06dd.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747243/proj1c_ehs7fo.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747243/proj1d_lwuljc.jpg"],
  },
  {
    title: "Banking Website",
    subtitle: "",
    technologies: ["React", "Tailwind"],
    description: "",
    bulletPoints: ["Single page layout of banking website"],
    github: "https://github.com/muthalakshya/bank_modern_app",
    live: "https://lakshya-mutha.netlify.app/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747244/proj2a_j9lpk0.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747244/proj2b_xnso1n.jpg"],
  },
  {
    title: "Myntra Website",
    subtitle: "",
    technologies: ["React", "Tailwind"],
    description: "",
    bulletPoints: ["Home page of Myntra website"],
    github: "https://github.com/muthalakshya/myntra",
    live: "https://timely-torrone-201ad9.netlify.app/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747260/proj5a_ctwneg.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747261/proj5b_jkasnj.jpg"],
  },
  {
    title: "Netfix clone",
    subtitle: "",
    technologies: ["React", "Tailwind"],
    description: "",
    bulletPoints: ["Single page layout of the Netfix website"],
    github: "https://github.com/muthalakshya/netflix",
    live: "https://luxury-travesseiro-068786.netlify.app/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747245/proj3a_gwlwkf.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747245/proj3b_hig91c.jpg"],
  },
  {
    title: "PI Logistic",
    subtitle: "",
    technologies: [
      "HTML",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "Owl Carousel",
      "JQuery",
    ],
    description: "",
    bulletPoints: ["Single page layout of the PI Logistic website"],
    github: "https://github.com/muthalakshya/pilogistics",
    live: "https://adorable-treacle-e876a2.netlify.app/",
    images: ["https://res.cloudinary.com/dbkecod0k/image/upload/v1770747246/proj4a_st2yqo.jpg", "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747264/proj4b_xznnhs.jpg"],
  },
];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative group w-full h-40 sm:h-60 md:h-80 mt-8 mb-8">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="size-full rounded-2xl bg-center bg-cover sm:bg-contain bg-no-repeat duration-500 border border-black bg-gray-100"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-lg sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
        <FaChevronLeft onClick={prevSlide} size={24} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-lg sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
        <FaChevronRight onClick={nextSlide} size={24} />
      </div>
      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer duration-500 mx-1 ${
              currentIndex === slideIndex
                ? "text-brand-yellow"
                : "text-gray-300"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className="bg-transparent playwritefont px-4 sm:px-10 lg:px-20 py-10"
      id="projects"
    >
      <h1 className="text-center text-3xl sm:text-5xl text-black mb-8">
        Projects
      </h1>

      {projectsData.map((project, index) => (
        <div
          key={index}
          className="mb-16 p-4 sm:p-8 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col lg:flex-row gap-8"
        >
          {/* Project Title */}
          <div className="lg:w-1/4">
            <h1 className="text-3xl sm:text-5xl bg-gradient-to-r from-yellow-600 via-black to-yellow-600 bg-clip-text text-transparent">{project.title}</h1>
            {project.subtitle && (
              <h2 className="text-lg sm:text-xl pt-4 text-black">
                {project.subtitle}
              </h2>
            )}
          </div>

          {/* Project Details */}
          <div className="lg:w-3/4">
            {/* Technologies Used */}
            <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-4 sm:gap-0">
              <h2 className="text-xl sm:text-3xl text-black font-bold mt-2">
                Technologies Used
              </h2>
              <div className="flex self-start sm:self-auto">
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="text-md text-white mr-2 bg-black px-4 py-2 sm:px-5 sm:pt-2 rounded transition-transform hover:scale-105"
                >
                  <FaGithub size={20} />
                </button>
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="text-md text-black bg-brand-yellow px-5 py-1 rounded transition-transform hover:scale-105"
                >
                  Live
                </button>
              </div>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap mt-4 gap-2">
              {project.technologies.map((tech) => (
                <h2
                  key={tech}
                  className="text-sm text-black bg-brand-yellow border border-black hover:bg-black hover:text-white px-3 sm:px-6 py-1 rounded-2xl transition-all duration-300"
                >
                  {tech}
                </h2>
              ))}
            </div>

            {project.description && (
              <h2 className="text-lg pt-4 sm:text-xl text-zinc-600">
                {project.description}
              </h2>
            )}

            {/* Description List */}
            {project.bulletPoints && (
              <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-700 marker:text-black">
                {project.bulletPoints.map((point, i) => (
                  <li key={i} className="mb-2 sm:mb-4">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Project Images - Carousel if > 2, else Grid */}
            {project.images.length > 2 ? (
              <ImageCarousel images={project.images} />
            ) : (
              <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    className="w-[100%] sm:w-[48%] rounded-2xl border border-black object-cover"
                    src={image}
                    alt={`${project.title} screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
