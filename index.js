import express from "express";
import { courseRouter } from "./src/routes/courses.routes.js"
const app = express();

app.use(express.json());

app.use("/courseData",courseRouter)

// in this line no 7 i create base of router and base routername is 
// /courseData
const PORT = 3030;

app.listen(PORT, () => {
  console.log(`server is runing port ${PORT}`);
});



