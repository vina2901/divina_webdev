import { beforeEach, describe, expect, test, vi } from 'vitest';
import { prisma } from '@/lib/prisma';
import { getPortfolioData } from './portfolio';

vi.mock('@/lib/prisma', () => ({
    prisma: {
        users: {
            findUnique: vi.fn(),
        },
    },
}));

describe('getPortfolioData', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should return null if email is missing', async () => {
        const portfolioData = await getPortfolioData('   ');

        expect(portfolioData).toBeNull();
        expect(prisma.users.findUnique).not.toHaveBeenCalled();
    });

    test('should return null if no user matches the email', async () => {
        vi.mocked(prisma.users.findUnique).mockResolvedValueOnce(null);

        const portfolioData = await getPortfolioData('user@example.com');

        expect(portfolioData).toBeNull();
        expect(prisma.users.findUnique).toHaveBeenCalledWith({
            where: { email: 'user@example.com' },
            include: {
                skills: true,
                abouts: true,
                projects: true,
                experiences: true,
                contacts: true,
            },
        });
    });

    test('should return portfolio data if email is provided and a user exists', async () => {
        const mockUser = { id: 1, email: 'user@example.com', name: 'Test User' };
        vi.mocked(prisma.users.findUnique).mockResolvedValueOnce(mockUser as any);

        const portfolioData = await getPortfolioData('user@example.com');

        expect(portfolioData).toEqual(mockUser);
    });
});