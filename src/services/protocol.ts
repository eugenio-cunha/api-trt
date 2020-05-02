import { Doc } from '../interfaces';
import { Mongo, Notification } from '../lib';

export default class Protocol {

  public static async register(target: string, code: string, instance: number): Promise<Doc> {
    const request = { status: 'waiting', code, instance, start: new Date() };
    const id = await Mongo.insert(target, 'request', request);
    Notification.send(target, { id, code, instance });
    return { id, ...request };
  }

  public static async search(target: string, id: string): Promise<Doc | null> {
    let result: Doc;
    const doc = await Mongo.find(target, 'request', id);

    if (!doc) {
      result = { id, status: 'not found' };
    } else if (doc.status === 'done') {
      result = { ...doc, data: await this.get(target, id) }
    } else {
      result = doc;
    }

    return result;
  }

  private static async get(target: string, id: string): Promise<Doc> {
    const pipeline = [
      {
        '$match': {
          'request': Mongo.objectId(id)
        }
      }, {
        '$project': {
          '_id': 0,
          'numero': 1,
          'itens': {
            '$map': {
              'input': '$itensProcesso',
              'as': 'item',
              'in': {
                'titulo': '$$item.titulo',
                'data': '$$item.data'
              }
            }
          }
        }
      }
    ];
    const [doc] = await Mongo.aggregate(target, 'data', pipeline);

    return doc;
  }
}

