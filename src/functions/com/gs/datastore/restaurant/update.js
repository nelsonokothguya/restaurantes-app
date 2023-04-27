// update.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function update(id, data) {
  try {
    const updatedRestaurant = await prisma.restaurant.update({
      where: { id },
      data,
    });
    return updatedRestaurant;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
