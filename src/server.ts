import App from './app';
import { httpPort, httpHost, env } from './config';

const app = new App();

app.listen(httpPort, () => console.info(`(${env}) http://${httpHost}:${httpPort}`));