const PROJECTS = [
  {
    num: "01",
    name: "TransparaTrack",
    type: "Database System",
    stack: ["HTML/CSS", "SQL", "Web"],
    year: "2025",
    desc: "Web-based system to improve transparency and efficiency by tracking requests, records, and processes in an organized, user-friendly platform.",
  },
  {
    num: "02",
    name: "Campus Quest",
    type: "Game Development",
    stack: ["Unity", "C#", "2D"],
    year: "2024",
    desc: "A 2D educational adventure game set in a university environment where players solve IT-themed puzzles to advance through levels.",
  },
  {
    num: "03",
    name: "Barangay Records System",
    type: "Information System",
    stack: ["HTML/CSS", "JavaScript", "Database"],
    year: "2023",
    desc: "Digital records management system built during work immersion to streamline applicant data entry and document processing.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#e5ddd3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">Work</p>
            <h2 className="text-2xl sm:text-3xl font-normal" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Selected projects
            </h2>
          </div>
          <span className="text-[11px] text-[#a8998a] hidden sm:block">2023 &ndash; 2025</span>
        </div>

        <div className="space-y-0">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="group border-t border-[#e5ddd3] hover:border-[#1e6b6b] transition-colors duration-300 py-7"
            >
              <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-6">
                <div className="sm:col-span-1">
                  <span className="text-[10px] text-[#1e6b6b]">{p.num}</span>
                </div>
                <div className="sm:col-span-3">
                  <p
                    className="text-[17px] font-normal group-hover:italic group-hover:text-[#1e6b6b] transition-all duration-200"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {p.name}
                  </p>
                  <p className="text-[11px] text-[#a8998a] mt-0.5">{p.type} &middot; {p.year}</p>
                </div>
                <div className="sm:col-span-3 flex flex-wrap gap-1.5 content-start">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[10px] tracking-wider uppercase px-2 py-1 border border-[#e5ddd3] text-[#a8998a]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="sm:col-span-5">
                  <p className="text-[13px] leading-relaxed text-[#5a4f45]">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e5ddd3]" />
        </div>

        {/* Certification */}
        <div className="mt-10 border-t border-b border-[#e5ddd3] py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-1">Certification</p>
            <p className="text-[16px] font-normal" style={{ fontFamily: "'DM Serif Display', serif" }}>
              National Certificate II &mdash; Computer Systems Servicing
            </p>
            <p className="text-[12px] text-[#a8998a] mt-0.5">TESDA</p>
          </div>
          <span className="text-[12px] text-[#8a7b6e]">2022</span>
        </div>
      </div>
    </section>
  );
}