
import express, { Application } from 'express';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from 'cors';
import { notFound } from './middlewares/notFound';
import { RootRouter } from './routes/rootRouter';
import { globalErrorHandler } from './middlewares/errorHandler';

 

const app: Application = express();

app.use(cookieParser());
// Middleware


// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// )


app.set("trust proxy", 1);
app.use(
  cors({
    origin: ["https://anycomp-frontend-eight.vercel.app", "http://localhost:3000"],
    credentials: true,
  })
)

app.use(express.json());

// Routes
app.use('/api/v1', RootRouter);


// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// 404 and Error Handler
app.use(notFound);
app.use(globalErrorHandler);

export default app;
