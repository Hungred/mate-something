export const runtime = 'nodejs';
import prisma from '~/server/utils/prisma';
export default defineEventHandler(async (event) => {
  try {
    const items = await prisma.shop_items.findMany({
      where: {
        is_active: true,
      },
    });
    return items;
  } catch (error) {
    console.error('資料庫讀取失敗:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Database connection failed',
    });
  }
});
