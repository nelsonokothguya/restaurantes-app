// one.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function one(id) {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    return restaurant;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
