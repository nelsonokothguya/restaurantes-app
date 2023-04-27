// search.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMenuItemsByCouponCode(restaurantId, couponCode) {
  try {
    const menuItems = await prisma.menuItems.findMany({
      where: {
        restaurantId: restaurantId,
        couponCode: couponCode,
      },
    });
    return menuItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = async function search(params) {
  try {
    const { city, couponCode } = params;
    const restaurants = await prisma.restaurant.findMany({
      where: {
        city: city,
      },
      include: {
        menuItems: true,
      },
    });

    if (couponCode) {
      for (const restaurant of restaurants) {
        restaurant.menuItems = await getMenuItemsByCouponCode(restaurant.id, couponCode);
      }
    }

    return restaurants;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
