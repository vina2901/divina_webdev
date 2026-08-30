import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const user = await prisma.users.upsert({
    where: { email: "divinabarabad91@gmail.com" },
    update: {
      name: "Divina",
      password: "password123",
      status: "active",
      address: "Beijing, China",
      Phone: "09693586166",
    },
    create: {
      email: "divinabarabad91@gmail.com",
      name: "Divina",
      password: "password123",
      status: "active",
      address: "90 - Sitio Pinaglabanan Western Bicutan, Taguig City, Philippines",
      Phone: "09693586166",
    },
  });

  const experienceCount = await prisma.experiences.count({
    where: { user_id: user.id },
  });

  if (experienceCount === 0) {
    await prisma.experiences.createMany({
      data: [
        {
          company: "Tech Solutions Inc.",
          role: "Frontend Developer",
          period: "2022-2023",
          location: "90 - Sitio Pinaglabanan Western Bicutan, Taguig City, Philippines",
          position: "Software Engineer",
          startDate: new Date("2022-01-01"),
          endDate: new Date("2023-01-01"),
          description:
            "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
          user_id: user.id,
        },
      ],
    });
  }

  const projectsCount = await prisma.projects.count({
    where: { user_id: user.id },
  });

  if (projectsCount === 0) {
    await prisma.projects.createMany({
      data: [
        {
          title: "Portfolio Website",
          type: "Web Development",
          year: 2023,
          desc: "A personal portfolio website showcasing my projects and skills.",
          user_id: user.id,
        },
        {
          title: "E-commerce Platform",
          type: "Web Development",
          year: 2024,
          desc: "Developed a full-featured e-commerce platform with user authentication, product catalog, and shopping cart functionality.",
          user_id: user.id,
        },
        {
          title: "Mobile App for Task Management",
          type: "Mobile Development",
          year: 2025,
          desc: "Created a mobile application for task management, allowing users to create, edit, and track their tasks on the go.",
          user_id: user.id,
        },
      ],
    });
  }

  const contactCount = await prisma.contacts.count({
    where: { user_id: user.id },
  });

  if (contactCount === 0) {
    await prisma.contacts.create({
      data: {
        name: "Divina Barabad",
        email: "divinabarabad91@gmail.com",
        message: "Feel free to reach out for collaboration or inquiries.",
        user_id: user.id,
      },
    });
  }

  const aboutCount = await prisma.about.count({
    where: { user_id: user.id },
  });

  if (aboutCount === 0) {
    await prisma.about.createMany({
      data: [
        {
          name: "Rizal Technological University",
          information: "Bachelor of Science in Computer Science",
          year: "2023 - Present",
          user_id: user.id,
        },
        {
          name: "Western Bicutan National High School",
          information: "Senior High School Graduate",
          year: "2017 - 2023",
          user_id: user.id,
        },
        {
          name: "Fort Bonifacio Elementary School",
          information: "Elementary School Graduate",
          year: "2011 - 2017",
          user_id: user.id,
        },
      ],
    });
  }

  const skillCount = await prisma.skills.count({
    where: { user_id: user.id },
  });

  if (skillCount === 0) {
    await prisma.skills.createMany({
      data: [
        {
          category: "Frontend Development",
          items: "HTML, CSS, JavaScript, React, Next.js",
          user_id: user.id,
        },
        {
          category: "Tools",
          items: "Git, GitHub, Figma, VS Code",
          user_id: user.id,
        },
      ],
    });
  }

  console.log({ user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });