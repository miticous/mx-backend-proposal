import './common/env';
import Server from './common/server';
import routes from './routes';
import config from '../config/environment';

export default new Server()
  .router(routes)
  .listen(config.App.port);
