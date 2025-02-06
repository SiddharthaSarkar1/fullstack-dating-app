import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

//Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB(DATABASE_URL);
});
