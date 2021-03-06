import Hapi from 'hapi';
import Inert from 'inert';
import path from 'path';

const server = new Hapi.Server();
const publicPath = path.join(__dirname, '/../../../public');

server.connection({
  port: 3000
});

require('./devServerHapi').setup(server, publicPath);

server.register(Inert, () => {
});

server.route({
  method:  'GET',
  path:    '/{param*}',
  handler: {
    directory: {
      path: publicPath
    }
  }
});

server.start(() => console.log(`Server running at: ${server.info.uri}`));
