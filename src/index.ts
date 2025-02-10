import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// API Routes
// app.use("/api/users", userRoutes);

// // Connecting to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI as string)
//   .then(() => console.log("MongoDB is connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(PORT, () => console.log(`🚀 The server is running on http://localhost:${PORT}`));
