import { Request, Response } from "express";
import * as taskService from "../services/taskService";

export const getTasks = async (
  req: Request,
  res: Response
) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.json(tasks);
  } catch {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export const createTask = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      title,
      priority,
      status,
      projectId,
    } = req.body;

    if (
      !title ||
      typeof title !== "string" ||
      !title.trim()
    ) {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    const task = await taskService.createTask(
      title.trim(),
      priority || "Medium",
      status || "To Do",
      projectId
    );

    res.status(201).json(task);
  } catch {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid task ID",
      });
    }

    const {
      title,
      priority,
      status,
      projectId,
    } = req.body;

    if (
      !title ||
      typeof title !== "string" ||
      !title.trim()
    ) {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    const task = await taskService.updateTask(
      id,
      title.trim(),
      priority || "Medium",
      status || "To Do",
      projectId
    );

    res.json(task);
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "TaskNotFoundError"
    ) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(500).json({
      message: "Failed to update task",
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid task ID",
      });
    }

    await taskService.deleteTask(id);

    return res.status(204).send();
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "TaskNotFoundError"
    ) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(500).json({
      message: "Failed to delete task",
    });
  }
};