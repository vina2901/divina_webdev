type SkillItem = {
  id: number;
  category?: string | null;
  items?: string | null;
};

type SkillsProps = {
  skills?: SkillItem[];
};

const FALLBACK_SKILLS = [
  "HTML / CSS", "Basic Networking", "Database Management",
  "System Documentation", "IT Support", "Troubleshooting",
  "Time-Management", "Attention to Detail", "Adaptability",
];

export default function Skills({ skills = [] }: SkillsProps) {
  const skillLabels = skills.length
    ? skills.flatMap((skill) =>
        (skill.items ?? skill.category ?? "Skill")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .map((label, index) => ({ id: `${skill.id}-${index}`, label })),
      )
    : FALLBACK_SKILLS.map((label, index) => ({ id: `fallback-${index}`, label }));

  return (
    <section id="skills" className="w-full border-t border-[#e5ddd3] bg-[#f0f7f7]">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
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