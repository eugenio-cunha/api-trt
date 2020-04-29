import { Router } from 'express';
import { Ping } from '../controllers';

export default (router: Router) => {
  const routes = Router();
  
  routes.get('/ping', Ping.test);
  
  router.use(routes);
};