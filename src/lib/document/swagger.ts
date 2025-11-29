
import swaggerJsDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsDoc({
  swaggerDefinition: { info: { title: 'API', version: '1.0.0' } },
  apis: ['./src/routes/*.ts'],
});

