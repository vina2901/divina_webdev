type AboutEntry = {
  id: number;
  name: string;
  information?: string | null;
  year?: string | null;
};

type ExperienceEntry = {
  id: number;
  company: string;
  role: string;
  period?: string | null;
  location?: string | null;
  description?: string | null;
};

type AboutProps = {
  abouts?: AboutEntry[];
  experiences?: ExperienceEntry[];
};

export default function About({ abouts = [], experiences = [] }: AboutProps) {
  if (!abouts.length && !experiences.length) {
    return null;
  }

  const primaryExperience = experiences[0] ?? null;

  return (
    <section id="about" className="border-t border-[#e5ddd3]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">About</p>
        <h2 className="text-2xl sm:text-3xl font-normal mb-12" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Background
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            {primaryExperience ? (
              <div className="mt-10 pt-8 border-t border-[#e5ddd3]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-5">Experience</p>
                <div className="pl-4 border-l-2 border-[#1e6b6b]">
                  <p className="text-[15px] font-normal mb-0.5" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {primaryExperience.role}
                  </p>
                  <p className="text-[11px] text-[#1e6b6b] mb-3">
                    {primaryExperience.company}
                    {primaryExperience.location ? ` &middot; ${primaryExperience.location}` : ""}
                    {primaryExperience.period ? ` &middot; ${primaryExperience.period}` : ""}
                  </p>
                  <ul className="space-y-2">
                    <li className="text-[12px] text-[#5a4f45] leading-relaxed">
                      {primaryExperience.description || "Professional experience recorded in the portfolio database."}
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div className="md:col-span-7">
            {abouts.length ? (
              <>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-5">Education</p>
                {abouts.map((item, index) => (
                  <div
                    key={item.id ?? index}
                    className={`border-t py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 ${
                      index === 0 ? "border-[#1e6b6b]" : "border-[#e5ddd3]"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-[15px] font-normal mb-0.5 ${index === 0 ? "text-[#1c1812]" : "text-[#8a7b6e]"}`}
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-[11px] text-[#a8998a]">{item.information || "Education"}</p>
                    </div>
                    <span className={`text-[11px] shrink-0 ${index === 0 ? "text-[#1e6b6b]" : "text-[#b8a898]"}`}>
                      {item.year || "N/A"}
                    </span>
                  </div>
                ))}
                <div className="border-t border-[#e5ddd3]" />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}