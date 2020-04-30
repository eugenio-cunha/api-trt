import { Router } from 'express';
import { Target } from '../controllers';

export default (router: Router) => {
  const routes = Router();
  
  routes.post('/:target/search', Target.request);

  routes.get('/:target/search', Target.search);
  
  router.use(routes);
};