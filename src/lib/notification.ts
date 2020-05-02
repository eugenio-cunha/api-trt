import { socketPort } from '../config'
import { Server, Socket, listen } from 'socket.io';

class Notification {

  private clients: Socket[];
  private server: Server | null;
  private static instance: Notification;

  private constructor(port: number) {
    this.clients = [];
    this.server = listen(port);
    this.server.on('connection', this.connection.bind(this));
  }

  public static getInstance(port: number): Notification {
    if (!Notification.instance) {

      Notification.instance = new Notification(port);
    }

    return Notification.instance;
  }

  public send(target: string, value: { [key: string]: any }): boolean {
    let result = false;
    const socket = this.next();

    if (socket) {
      result = socket.emit(target, value);
    }

    return result;
  }

  private connection(socket: Socket) {
    this.clients.push(socket);
    socket.on('disconnect', () => {
      this.clients = this.clients.filter(e => e.id !== socket.id);
    });
  }

  private next(): Socket | null {
    let result = null;
    if (this.clients.length === 1) {
      [result] = this.clients;
    } else if (this.clients.length > 1) {
      result = this.clients.shift();
      result && this.clients.push(result);
    }
    return result || null;
  }
}

export default Notification.getInstance(socketPort);