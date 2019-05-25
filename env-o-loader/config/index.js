const envLoader = require('env-o-loader')

const mysql = envLoader('./mysql.yaml')
const elasticsearch = envLoader('./elasticsearch.yaml')
const rabbitmq = envLoader('./rabbitmq.yaml')

module.exports = {
  mysql: {
    host: mysql.host
  },

  elasticsearch: {
    network: {
      host: elasticsearch.network.host,
    },
    cluster: {
      name: elasticsearch.cluster.name,
    },
    node: {
      name: elasticsearch.node.name,
    },
  },

  rabbitmq: {
    host: rabbitmq.host,
  },
}