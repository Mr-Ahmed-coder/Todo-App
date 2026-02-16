import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoroute.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json());
// app.use(cors());


app.use("/api/todos", todoRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "FrontEnd", "dist", "index.html"));
  });
}
  connectDB();

app.listen(5000, () => {
  console.log("Server started");
});