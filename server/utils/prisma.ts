import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const adapter = new PrismaPg({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 5,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
const prisma = new PrismaClient({ adapter });

export default prisma;
