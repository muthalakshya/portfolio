/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const projectsData = [
  {
    title: "Toynik – E-commerce Platform",
    subtitle: "FLAGSHIP",
    tags: ["Full-Stack", "Production", "Startup"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "PhonePe",
      "Delhivery",
    ],
    description:
      "A full-scale e-commerce platform built for a consumer brand, handling payments, logistics, and admin operations.",
    bulletPoints: [
      "MERN stack app with JWT authentication & role-based admin access",
      "Integrated PhonePe payments and Delhivery API for order fulfillment",
      "Custom admin panel for products, orders, users & delivery tracking",
    ],
    github: "", // Private/Startup
    live: "https://toynik.com",
    images: [
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751071/c88aa393-ad41-4989-b365-7391eeb5529b.png",
      // "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751118/150503b9-7794-4c27-bd0c-51618f97a342.png",
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751154/ddd7fe00-1e7c-491f-b283-3785bc811e84.png",
      // "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751186/d110a9cf-0036-4de1-87f9-f03f8d783cf2.png"
    ], // Placeholder or user needs to provide
  },
  {
    title: "Forever e-com",
    subtitle: "",
    tags: ["Full-Stack", "MERN"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    description:
      "A complete MERN-based e-commerce application with secure authentication and order management.",
    bulletPoints: [
      "Dynamic product catalog, cart & order tracking",
      "JWT authentication with admin dashboard",
      "Responsive UI using React & Tailwind",
    ],
    github: "https://github.com/muthalakshya/forever",
    live: "https://forever-frontend-kfcd.onrender.com/",
    images: [
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747242/proj1a_ctgsex.jpg",
      // "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747242/proj1b_zi06dd.jpg",
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747243/proj1c_ehs7fo.jpg",
    ],
  },
  {
    title: "Fusion Furnish",
    subtitle: "",
    tags: ["AI", "Product Platform"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    description:
      "An AI-powered home décor platform connecting homeowners, consultants, and manufacturers.",
    bulletPoints: [
      "Automated backend workflows",
      "Consultant-focused mini-store generation",
      "MERN stack with scalable architecture",
    ],
    github: "https://github.com/muthalakshya/FutureFurnish",
    live: "https://fusion-furnish.vercel.app/",
    images: [
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747094/proj0a_lxp36c.jpg",
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747133/proj0b_kcxtce.jpg",
    ],
  },
  {
    title: "Mitochondria",
    subtitle: "Microlearning Platform",
    tags: ["EdTech", "AI", "Automation"],
    technologies: ["React", "Node.js", "n8n", "AI", "MongoDB", "Clerk", "JWT", "Tailwind", "Express"],
    description:
      "A microlearning ecosystem designed to improve critical thinking through AI-generated assessments.",
    bulletPoints: [
      "Student, Teacher & Public platforms",
      "AI-generated CBSE-mapped assessments",
      "Automated content creation using n8n",
    ],
    github: "",
    live: "https://www.mitochondria.in/",
    images: [
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751297/Picture1_zhwprb.png",
      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770751365/7baf37c0-b3a0-46d8-8451-bd35a9bb4b91.png"
    ], // Placeholder
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
      id="projects"
      className="min-h-screen flex flex-col justify-center bg-transparent py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
          Projects
        </h1>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className="mb-16 p-4 sm:p-8 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col lg:flex-row gap-8"
          >
            {/* Project Title */}
            <div className="lg:w-1/4">
              <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-yellow-600 via-black to-yellow-600 bg-clip-text text-transparent font-bold">
                {project.title}
              </h1>
              {project.subtitle && (
                <h2 className="text-lg sm:text-xl pt-2 font-bold text-brand-yellow">
                  {project.subtitle}
                </h2>
              )}

              {/* Tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-white bg-black px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="lg:w-3/4">
              {/* Live/Github Buttons Row */}
              <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 mb-4">
                <h2 className="text-xl sm:text-2xl text-black font-bold">
                  Technologies
                </h2>
                <div className="flex self-start sm:self-auto gap-2">
                  {project.github && (
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="text-sm font-bold text-white bg-black px-4 py-2 rounded transition-transform hover:scale-105 flex items-center gap-2"
                    >
                      <FaGithub size={18} /> GitHub
                    </button>
                  )}
                  {project.live && (
                    <button
                      onClick={() => window.open(project.live, "_blank")}
                      className="text-sm font-bold text-black bg-brand-yellow px-4 py-2 rounded transition-transform hover:scale-105"
                    >
                      Live Demo
                    </button>
                  )}
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

        <div className="flex justify-center mt-12">
          <a
            href="/more-projects"
            className="inline-flex items-center gap-2 text-lg font-bold text-white bg-black px-8 py-3 rounded-full shadow-lg hover:bg-brand-yellow hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            View More Projects <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
