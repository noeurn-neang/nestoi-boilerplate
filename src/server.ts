import dotenv from 'dotenv';
dotenv.config();

import { AppConfigs } from './configs/app';
import { nestplus } from 'nestplus';
import { routeTags } from './routes/v1';
import * as joiSchemas from './schemas';

nestplus({
  title: 'Nestplus Boilerplate Restful API',
  routeTags: routeTags,
  routePrefix: '/api',
  swagger: {
    servers: [`http://localhost:${AppConfigs.PORT}/api`],
  },
  joiSchemas,
}).listen(AppConfigs.PORT, () => {
  console.log(`Server listen on port ${AppConfigs.PORT}`);
});
