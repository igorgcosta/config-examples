const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/${process.env.NODE_ENV}.env` });

module.exports = {
  mysql: {
    host: process.env.MYSQL_CONNECTION_HOST
  },

  elasticsearch: {
    network: {
      host: process.env.ES_NETWORK_HOST,
    },
    cluster: {
      name: process.env.ES_CLUSTER_NAME,
    },
    node: {
      name: process.env.ES_NODE_NAME,
    },
  },

  rabbitmq: {
    host: process.env.RABBITMQ_HOST,
  },
}