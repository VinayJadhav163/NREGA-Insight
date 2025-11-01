import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDB from "./config/db.js";
import mgnregaRoutes from "./routes/mgnregaRoutes.js";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Explicitly load .env from current folder
dotenv.config({ path: path.join(__dirname, ".env") });

// 🔍 Debug line (check if .env loaded)
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/mgnrega", mgnregaRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
