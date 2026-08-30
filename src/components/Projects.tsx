type ProjectItem = {
  id: number;
  title: string;
  type: string;
  year: number;
  desc: string;
};

type ProjectsProps = {
  projects?: ProjectItem[];
};

export default function Projects({ projects = [] }: ProjectsProps) {
  if (!projects.length) {
    return null;
  }

  const projectList = projects.map((project, index) => ({
    num: String(index + 1).padStart(2, "0"),
    name: project.title,
    type: project.type,
    year: String(project.year),
    desc: project.desc,
  }));

  return (
    <section id="projects" className="w-full border-t border-[#e5ddd3]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">Work</p>
            <h2 className="text-2xl sm:text-3xl font-normal" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Selected projects
            </h2>
          </div>
          <span className="text-[11px] text-[#a8998a] hidden sm:block">Portfolio</span>
        </div>

        <div className="space-y-0">
          {projectList.map((project) => (
            <div
              key={project.num}
              className="group border-t border-[#e5ddd3] hover:border-[#1e6b6b] transition-colors duration-300 py-7"
            >
              <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-6">
                <div className="sm:col-span-1">
                  <span className="text-[10px] text-[#1e6b6b]">{project.num}</span>
                </div>
                <div className="min-w-0 sm:col-span-4">
                  <p
                    className="text-[17px] font-normal group-hover:italic group-hover:text-[#1e6b6b] transition-all duration-200"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {project.name}
                  </p>
                  <p className="text-[11px] text-[#a8998a] mt-0.5">{project.type} &middot; {project.year}</p>
                </div>
                <div className="min-w-0 sm:col-span-7">
                  <p className="break-words text-[13px] leading-relaxed text-[#5a4f45]">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e5ddd3]" />
        </div>
      </div>
    </section>
  );
}