import dotenv from 'dotenv';
dotenv.config();

import { AppConfigs } from './configs/app';
import { routeTags } from './routes/v1';
import * as joiSchemas from './schemas';
const  {nestoi} = require('nestoi');

nestoi({
  title: 'nestoi Boilerplate Restful API',
  routeTags: routeTags,
  routePrefix: '/api',
  swagger: {
    servers: [`http://localhost:${AppConfigs.PORT}/api`],
  },
  joiSchemas,
}).listen(AppConfigs.PORT, () => {
  console.log(`Server listen on port ${AppConfigs.PORT}`);
});