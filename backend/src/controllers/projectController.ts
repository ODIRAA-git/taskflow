import { Request, Response } from "express";
import * as projectService from "../services/projectService";

export const getProjects = async (
  req: Request,
  res: Response
) => {
  try {
    const projects = await projectService.getAllProjects();

    res.json(projects);
  } catch {
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

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Project name is required",
      });
    }

    const project = await projectService.createProject(
      name.trim(),
      description
    );

    res.status(201).json(project);
  } catch {
    res.status(500).json({
      message: "Failed to create project",
    });
  }
};

export const updateProject = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid project ID",
      });
    }

    const { name, description } = req.body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Project name is required",
      });
    }

    const project = await projectService.updateProject(
      id,
      name.trim(),
      description
    );

    res.json(project);
       } catch (error) {
      if (
        error instanceof Error &&
        error.name === "ProjectNotFoundError"
      ) {
        return res.status(404).json({
          message: "Project not found",
        });
      }

      return res.status(500).json({
        message: "Failed to update project",
      });
    }
};
export const deleteProject = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid project ID",
      });
    }

    await projectService.deleteProject(id);

    return res.status(204).send();
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "ProjectNotFoundError"
    ) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(500).json({
      message: "Failed to delete project",
    });
  }
};