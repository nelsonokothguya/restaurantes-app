// searchMenuItems.js
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

module.exports = async (params) => {
  try {
    const { restaurantId, couponCode } = params;

    if (couponCode) {
      const menuItems = await getMenuItemsByCouponCode(restaurantId, couponCode);
      return menuItems;
    } else {
      const menuItems = await prisma.menuItems.findMany({
        where: {
          restaurantId: restaurantId,
        },
      });
      return menuItems;
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
