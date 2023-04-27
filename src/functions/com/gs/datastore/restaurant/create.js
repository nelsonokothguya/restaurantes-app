// create.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function create(data) {
  try {
    const newRestaurant = await prisma.restaurant.create({ data });
    return newRestaurant;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
