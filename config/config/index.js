const config = require('config');

module.exports = {
  mysql: {
    host: config.get('mysql.host')
  },

  elasticsearch: {
    network: {
      host: config.get('elasticsearch.network.host'),
    },
    cluster: {
      name: config.get('elasticsearch.cluster.name'),
    },
    node: {
      name: config.get('elasticsearch.node.name'),
    },
  },

  rabbitmq: {
    host: config.get('rabbitmq.host'),
  },
}