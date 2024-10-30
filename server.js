import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Deployment succesfully");
});

app.use("/api/submit", userRoute);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
