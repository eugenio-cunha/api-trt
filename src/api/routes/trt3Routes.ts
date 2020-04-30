import { Router } from 'express';
import { TRT3 } from '../controllers';

export default (router: Router) => {
  const routes = Router();
  
  routes.post('/trt3/request', TRT3.request);

  routes.post('/trt3/response', TRT3.response);
  
  router.use(routes);
};