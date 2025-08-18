import { PrismaClient } from '@prisma/client';

// Инициализируем Prisma Client
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing painting ID' });
  }

  try {
    const painting = await prisma.painting.findUnique({
      where: { id: parseInt(id) }
    });

    if (!painting) {
      return res.status(404).json({ error: 'Painting not found' });
    }

    res.status(200).json(painting);
  } catch (error) {
    console.error('Failed to fetch painting:', error);
    res.status(500).json({ error: 'Failed to fetch painting' });
  } finally {
    await prisma.$disconnect();
  }
}