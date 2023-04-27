// delete.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function deleteRestaurant(id) {
  try {
    const deletedRestaurant = await prisma.restaurant.delete({ where: { id } });
    return deletedRestaurant;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
