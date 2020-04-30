import App from './app';
import { port, host, env } from './config';

const app = new App();

app.listen(port, () => console.info(`(${env}) http://${host}:${port}`));