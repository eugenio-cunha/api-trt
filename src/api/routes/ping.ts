import { Router } from 'express';
import { Ping } from '../controllers';

export default (router: Router) => {
  const routes = Router();
  
  routes.use('/ping', Ping.test);
  
  router.use(routes);
};