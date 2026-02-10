const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "jQuery", icon: "https://skillicons.dev/icons?i=jquery" },
    // Add more skills if needed
  ];

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col justify-center bg-transparent py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-black mb-16">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 p-4 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <span className="mt-4 text-lg font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
