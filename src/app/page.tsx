import Mynav from "../components/Navbar";
import Hero from "../components/Hero";
import { getPortfolioData } from "@/lib/actions/portfolio";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default async function Page() {
  const userEmail = process.env.PORTFOLIO_EMAIL?.trim();
  const portfolio = await getPortfolioData(userEmail);

  if (!portfolio) {
    return null;
  }

  const primaryContact = portfolio.contacts?.[0] ?? null;

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#fdf8f2] font-sans text-[#1c1812]">
      <Mynav />
      <main className="w-full">
        <Hero user={portfolio} />
        <Skills skills={portfolio.skills ?? []} />
        <Projects projects={portfolio.projects ?? []} />
        <About abouts={portfolio.abouts ?? []} experiences={portfolio.experiences ?? []} />
        <Contact user={portfolio} contact={primaryContact} />
      </main>
    </div>
  );
}

