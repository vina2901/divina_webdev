import { prisma } from "@/lib/prisma";

export const getPortfolioData = async (email?: string | null) => {
    const normalizedEmail = email?.trim();

    if (!normalizedEmail) {
        return null;
    }

    try {
        const user = await prisma.users.findUnique({
            where: { email: normalizedEmail },
            include: {
                skills: true,
                abouts: true,
                projects: true,
                experiences: true,
                contacts: true,
            },
        });

        return user ?? null;
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        return null;
    }
};