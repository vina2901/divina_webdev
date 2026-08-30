type ContactItem = {
  id: number;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  phone?: string | null;
  address?: string | null;
};

type ContactProps = {
  contacts?: ContactItem[];
};

export default function Contact({ contacts = [] }: ContactProps) {
  const contactItems = [
    { label: "Phone", value: contacts[0]?.phone ?? "09693586166" },
    { label: "Email", value: contacts[0]?.email ?? "dinabarabad91@gmail.com" },
    { label: "Location", value: contacts[0]?.address ?? "Western Bicutan Taguig City, Philippines" },
  ];

  return (
    <>
      <section id="contact" className="w-full border-t border-[#e5ddd3] bg-[#132828]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#4a9e9e] mb-4">Contact</p>
              <h2
                className="text-3xl sm:text-4xl font-normal leading-tight text-[#fdf8f2] mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Open to
                <br />
                <span className="italic text-[#7ecece]">opportunities.</span>
              </h2>
              <p className="text-[13px] text-[#6a9a9a] leading-relaxed max-w-xs">
                Looking for internships and entry-level roles in IT, system development,
                or database management.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-0 mb-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-6 border-b border-[#1e4040] py-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#4a9e9e] w-20 shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="min-w-0 break-all text-[13px] text-[#a8c8c8]">{item.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:dinabarabad91@gmail.com"
                className="group inline-flex items-center gap-4 bg-[#1e6b6b] text-[#fdf8f2] px-7 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[#2a8888] transition-colors duration-300"
              >
                Send a message
                <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#132828] border-t border-[#1e4040] py-7">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[12px] text-[#4a9e9e] tracking-widest uppercase">D.B</span>
          <p className="text-[10px] tracking-wider text-[#2a5a5a] uppercase">
            &copy; 2026 &middot; BS Information Technology &middot; RTU
          </p>
        </div>
      </footer>
    </>
  );
}