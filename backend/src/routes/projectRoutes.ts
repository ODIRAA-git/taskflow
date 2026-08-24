import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
} from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);

router.post("/", createProject);
router.put("/:id", updateProject);

export default router;