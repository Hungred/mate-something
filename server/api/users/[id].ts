export const runtime = 'nodejs';
import prisma from '~/server/utils/prisma';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id; // 取 URL path 參數
  try {
    const user = await prisma.users.findUnique({
      where: { user_id: id },
      include: {
        rooms: {
          select: { name: true },
        },
      },
    });

    if (!user) return null;

    return {
      ...user,
      room_name: user.rooms?.name ?? null,
    };
  } catch (error) {
    console.error('資料庫讀取失敗:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Database connection failed',
    });
  }
});
