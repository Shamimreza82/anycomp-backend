import swaggerUi from 'swagger-ui-express';

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import helloRoutes from './routes/helloRoutes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import { swaggerSpec } from './lib/document/swagger';
import { config } from './config';

const app: Application = express();

// Security
app.use(helmet({ contentSecurityPolicy: false }));

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: config.nodeEnv === "development" ? 1000 : 100, message: "Too many requests from this IP, please try again later.", }));

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/hello', helloRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// 404 and Error Handler
app.use(notFound);
app.use(errorHandler);

export default app;
