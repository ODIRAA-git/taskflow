import prisma from "../config/prisma";

export const getAllProjects = async () => {
  return prisma.project.findMany({
    include: {
      owner: true,
      tasks: true,
    },
  });
};

export const createProject = async (
  name: string,
  description?: string
) => {
  return prisma.project.create({
    data: {
      name,
      description,
      ownerId: 1, // Temporary until authentication
    },
  });
};