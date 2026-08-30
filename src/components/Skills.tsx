type SkillItem = {
  id: number;
  category?: string | null;
  items?: string | null;
};

type SkillsProps = {
  skills?: SkillItem[];
};

export default function Skills({ skills = [] }: SkillsProps) {
  if (!skills.length) {
    return null;
  }

  const skillLabels = skills.flatMap((skill) =>
    (skill.items ?? skill.category ?? "Skill")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((label, index) => ({ id: `${skill.id}-${index}`, label })),
  );

  return (
    <section id="skills" className="w-full border-t border-[#e5ddd3] bg-[#f0f7f7]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#1e6b6b] mb-2">Expertise</p>
        <h2 className="text-2xl sm:text-3xl font-normal mb-10" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Skills
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skillLabels.map((skill) => (
            <span
              key={skill.id}
              className="text-[12px] px-4 py-2.5 border border-[#c4dede] bg-[#fdf8f2] text-[#5a4f45] hover:border-[#1e6b6b] hover:text-[#1e6b6b] transition-colors duration-200 cursor-default"
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}