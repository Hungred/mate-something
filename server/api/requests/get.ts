export const runtime = 'nodejs';
import prisma from '~/server/utils/prisma';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const roomId = Number(query.room_id);

  try {
    const where: any = { status: 'open' };
    if (!isNaN(roomId)) {
      where.room_id = { not: roomId };
    }

    const result = await prisma.requests.findMany({
      include: {
        room: {
          select: { name: true },
        },
      },
      where,
      orderBy: { createdAt: 'desc' }, // 可加排序
    });

    return result.map((item) => ({
      ...item,
      room_name: item.room?.name || '',
    }));
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Database connection failed',
    });
  }
});
