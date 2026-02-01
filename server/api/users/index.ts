export const runtime = 'nodejs';
import prisma from '~/server/utils/prisma';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const users = await prisma.users.findMany({
      include: {
        rooms: {
          select: { name: true },
        },
      },
    });

    return users.map((u) => ({
      ...u,
      room_name: u.rooms?.name ?? null,
    }));
  } catch (error) {
    console.error('資料庫讀取失敗:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Database connection failed',
    });
  }
});
