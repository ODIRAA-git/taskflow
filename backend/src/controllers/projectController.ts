import { Request, Response } from "express";
import prisma from "../config/prisma";
import * as projectService from "../services/projectService";

export const getProjects = async (
  req,
  res
) => {
  try {
    const projects =
      await projectService.getAllProjects();

    res.json(projects);
  } catch {
    res.status(500).json({
      message: "Failed to fetch projects",
    });
  }
};

export const createProject = async (
  req,
  res
) => {
  try {
    const { name, description } = req.body;

    const project =
      await projectService.createProject(
        name,
        description
      );

    res.status(201).json(project);
  } catch {
    res.status(500).json({
      message: "Failed to create project",
    });
  }
};