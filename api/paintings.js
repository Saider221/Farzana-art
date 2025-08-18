import { PrismaClient } from '@prisma/client';

// Инициализируем Prisma Client
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const paintings = await prisma.painting.findMany();
    res.status(200).json(paintings);
  } catch (error) {
    console.error('Failed to fetch paintings:', error);
    res.status(500).json({ error: 'Failed to fetch paintings' });
  } finally {
    await prisma.$disconnect();
  }
}