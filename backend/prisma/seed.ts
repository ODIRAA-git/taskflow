import prisma from "../src/config/prisma";

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: "demo@taskflow.com",
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        name: "Demo User",
        email: "demo@taskflow.com",
        password: "temporary-password",
      },
    });

    console.log("✅ Demo user created");
  } else {
    console.log("ℹ️ Demo user already exists");
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });