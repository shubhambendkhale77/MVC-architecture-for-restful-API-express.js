import express from "express";
import {
  getCourse,
  serachCourseData,
} from "../controllers/courses.controller.js";
const courseRouter = express.Router();

courseRouter.get("/courses/:id",getCourse);

courseRouter.get("/courses", serachCourseData);

export { courseRouter };
