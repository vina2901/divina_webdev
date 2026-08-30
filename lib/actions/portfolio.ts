import { prisma } from "@/lib/prisma";

export const getPortfolioData = async (email: string) => {
    if (!email) {
        throw new Error("Email is required");
    }
    try {
        const user = await prisma.users.findUnique({
            where: { email },
            include: {
                skills: true,
                abouts: true,
                projects: true,
                experiences: true,
                contacts: true,
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        throw new Error("Failed to fetch portfolio data");
    }
};