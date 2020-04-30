import { Protocol } from '../../services';
import { Request, Response } from 'express';

class Target {

  public async request(req: Request, res: Response): Promise<Response> {
    const { target } = req.params;
    const { code, instance } = req.body;

    const doc = await Protocol.register(target, code, instance);

    return res.json(doc);
  }

  public async search(req: Request, res: Response): Promise<Response> {
    const { target } = req.params;
    const { id } = req.query;

    const doc = await Protocol.search(target as string, id as string);

    return res.json(doc);
  }
}

export default new Target();