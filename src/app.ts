import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config';
import helloRoutes from './routes/helloRoutes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './utils/logger';

 const app: Application = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', helloRoutes);

// 404 Middleware
app.use(notFound);

// Error Handler
app.use(errorHandler);

// Start server


export default app
