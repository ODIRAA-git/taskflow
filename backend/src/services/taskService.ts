import prisma from "../config/prisma";

export const getAllTasks = async () => {
  return prisma.task.findMany({
    include: {
      project: true,
      user: true,
    },
  });
};

export const createTask = async (
  title: string,
  priority: string,
  status: string,
  projectId?: number
) => {
  return prisma.task.create({
    data: {
      title,
      priority,
      status,
      projectId,
      userId: 1, // Temporary until authentication
    },
  });
};

export const updateTask = async (
  id: number,
  title: string,
  priority: string,
  status: string,
  projectId?: number
) => {
  const existingTask = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!existingTask) {
    const error = new Error("Task not found");
    error.name = "TaskNotFoundError";
    throw error;
  }

  return prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      priority,
      status,
      projectId,
    },
  });
};

export const deleteTask = async (id: number) => {
  const existingTask = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!existingTask) {
    const error = new Error("Task not found");
    error.name = "TaskNotFoundError";
    throw error;
  }

  return prisma.task.delete({
    where: {
      id,
    },
  });
};