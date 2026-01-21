import AgentAPI from 'apminsight';
AgentAPI.config();
import swaggerUi from 'swagger-ui-express';
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { notFound } from './middlewares/notFound';
import { swaggerSpec } from './lib/document/swagger';
import { RootRouter } from './routes/rootRouter';
import { globalErrorHandler } from './middlewares/errorHandler';

const app: Application = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', RootRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// 404 and Error Handler
app.use(notFound);
app.use(globalErrorHandler);

export default app;
