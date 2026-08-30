export default function About() {
  return (
    <section id="about" className="border-t border-[#e5ddd3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">About</p>
        <h2 className="text-2xl sm:text-3xl font-normal mb-12" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Background
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[14px] leading-[1.9] text-[#5a4f45] mb-5">
              Motivated and detail-oriented IT student with strong knowledge in system
              development, documentation, and basic IT support. Equipped with academic
              experience in networking, database management, and troubleshooting.
            </p>
            <p className="text-[14px] leading-[1.9] text-[#5a4f45]">
              Driven to apply technical skills and professional discipline to support
              operational efficiency, deliver quality outputs, and grow within a
              reputable organization in the technology or administrative field.
            </p>

            <div className="mt-10 pt-8 border-t border-[#e5ddd3]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-5">Experience</p>
              <div className="pl-4 border-l-2 border-[#1e6b6b]">
                <p className="text-[15px] font-normal mb-0.5" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  Work Immersion
                </p>
                <p className="text-[11px] text-[#1e6b6b] mb-3">Lower Bicutan Barangay &middot; 2022</p>
                <ul className="space-y-2">
                  <li className="text-[12px] text-[#5a4f45] leading-relaxed">
                    Recorded and updated applicants&apos; information in databases to support efficient recruitment processes.
                  </li>
                  <li className="text-[12px] text-[#5a4f45] leading-relaxed">
                    Assisted applicants by issuing necessary forms and guiding them through the application process.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-5">Education</p>
            {[
              { school: "Rizal Technological University", degree: "BS Information Technology", period: "2023 — Present", current: true },
              { school: "Western Bicutan National High School", degree: "Junior High School – Senior High School", period: "2017 — 2023", current: false },
              { school: "Fort Bonifacio Elementary School", degree: "Elementary", period: "2011 — 2017", current: false },
            ].map((ed, i) => (
              <div
                key={i}
                className={`border-t py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 ${
                  ed.current ? "border-[#1e6b6b]" : "border-[#e5ddd3]"
                }`}
              >
                <div>
                  <p
                    className={`text-[15px] font-normal mb-0.5 ${ed.current ? "text-[#1c1812]" : "text-[#8a7b6e]"}`}
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {ed.school}
                  </p>
                  <p className="text-[11px] text-[#a8998a]">{ed.degree}</p>
                </div>
                <span className={`text-[11px] shrink-0 ${ed.current ? "text-[#1e6b6b]" : "text-[#b8a898]"}`}>
                  {ed.period}
                </span>
              </div>
            ))}
            <div className="border-t border-[#e5ddd3]" />
          </div>
        </div>
      </div>
    </section>
  );
}