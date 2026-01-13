export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const newRequest = await prisma.requests.create({
    data: {
      title: body.title,
      content: body.content,
      roomId: body.roomId,
    },
  });

  return newRequest;
});
