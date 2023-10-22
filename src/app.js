import express from 'express';
import config from './config';
import cors from 'cors'
import morgan from "morgan";

import chatbotRoutes from './routes/chatbot.routes';

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", chatbotRoutes);

export default app;