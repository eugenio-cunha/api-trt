import app from './app';
import { port, host, env } from './config';

app.listen(port, () => console.info(`(${env}) http://${host}:${port}`));