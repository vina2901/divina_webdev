import Mynav from "../components/Navbar";
import Hero from "../components/Hero";
import { getPortfolioData } from "@/lib/actions/portfolio";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default async function Page() {
  const userEmail = "divinabarabad91@gmail.com";
  const portfolio = await getPortfolioData(userEmail);

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <Mynav />
      <Hero user={portfolio} />
      <Skills skills={portfolio?.skills || []} />
      <Projects projects={portfolio?.projects || []} />
      <About />
      <Contact />
    </div>
  );
}

