import { Mongo } from '../lib';
import { Document } from '../interfaces';

export default class Protocol {

  public static async register(target: string, code: string, instance: number): Promise<Document> {
    const request = {
      status: 'waiting',
      parameters: { target, code, instance },
      start: new Date()
    }

    const id = await Mongo.insert(target, 'request', request);
    return { id, ...request };
  }

  public static async search(target: string, id: string): Promise<Document | null> {

    const doc = await Mongo.find(target, 'request', id);

    let result: Document;

    if (!doc) {
      result = { id, status: 'not found' };
    } else if (doc.status === 'done') {
      result =  { ...doc, data: await this.get(target, id) }
    } else {
      result = doc;
    }

    return result;
  }

  private static async get(target: string, id: string): Promise<Document> {
    const pipeline = [
      {
        '$match': {
          'request': Mongo.id(id)
        }
      }, {
        '$project': {
          '_id': 0,
          'numero': '$JSON.numero',
          'itens': '$JSON.itensProcesso'
        }
      }
    ];
    const [doc] = await Mongo.aggregate(target, 'data', pipeline);

    return doc;
  }
}