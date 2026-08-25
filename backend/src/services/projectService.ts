import prisma from "../config/prisma";

export const getAllProjects = async () => {
  return prisma.project.findMany({
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
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
export const updateProject = async (
  id: number,
  name: string,
  description?: string
) => {
  const existingProject = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  if (!existingProject) {
    const error = new Error("Project not found");
    error.name = "ProjectNotFoundError";
    throw error;
  }

  return prisma.project.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  });
};
export const deleteProject = async (id: number) => {
  try {
    return await prisma.project.delete({
      where: {
        id,
      },
    });
  } catch (error: any) {
    if (error?.code === "P2025") {
      const notFoundError = new Error("Project not found");
      notFoundError.name = "ProjectNotFoundError";
      throw notFoundError;
    }

    throw error;
  }
};