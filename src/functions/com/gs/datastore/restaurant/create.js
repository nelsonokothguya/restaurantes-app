// create.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function create(data) {
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
