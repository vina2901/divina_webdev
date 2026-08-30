type AboutProps = {
  user?: {
    name?: string | null;
    address?: string | null;
  } | null;
  abouts?: AboutItem[];
};

type AboutItem = {
  id: number;
  name: string;
  information: string;
  year: string;
};

export default function About({ user, abouts = [] }: AboutProps) {
  const profileName = user?.name ?? "Divina O. Barabad";
  const location = user?.address ?? "Western Bicutan Taguig City, Philippines";

  return (
    <section id="about" className="w-full border-t border-[#e5ddd3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">About</p>
        <h2 className="text-2xl sm:text-3xl font-normal mb-12" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Background
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[14px] leading-[1.9] text-[#5a4f45] mb-5">
              {profileName} is a motivated and detail-oriented IT student with strong knowledge in system
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
                <p className="text-[11px] text-[#1e6b6b] mb-3">{location} &middot; 2022</p>
                <ul className="space-y-2">
                  <li className="text-[12px] text-[#5a4f45] leading-relaxed">
                    
                  </li>
                  <li className="text-[12px] text-[#5a4f45] leading-relaxed">
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mb-5">Education</p>
            {abouts.map((education, i) => (
              <div
                key={education.id}
                className={`border-t py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 ${
                  i === 0 ? "border-[#1e6b6b]" : "border-[#e5ddd3]"
                }`}
              >
                <div>
                  <p
                    className={`text-[15px] font-normal mb-0.5 ${i === 0 ? "text-[#1c1812]" : "text-[#8a7b6e]"}`}
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {education.name}
                  </p>
                  <p className="break-words text-[11px] text-[#a8998a]">{education.information}</p>
                </div>
                <span className={`text-[11px] shrink-0 ${i === 0 ? "text-[#1e6b6b]" : "text-[#b8a898]"}`}>
                  {education.year}
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