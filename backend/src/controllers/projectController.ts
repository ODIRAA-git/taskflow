import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getProjects = async (
  req: Request,
  res: Response
) => {
  try {
    const projects = await prisma.project.findMany();

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
    });
  }
};

export const createProject = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, description } = req.body;

    const project = await prisma.project.create({
      data: {
        name,
        description,
        ownerId: 1, // Temporary until authentication is added
      },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create project",
    });
  }
};