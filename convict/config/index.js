const convict = require('convict')

var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },  
  elasticsearch: {
    network: {
      host: {
        doc: 'Elasticsearch network settings',
        format: String,
        default: 'es_test_network_host'
      }
    },
    cluster: {
      name: {
        default: 'es_test_cluster_name'
      }
    },
    node: {
      name: {
        default: 'es_test_node_name'
      }
    }
  },
  mysql: {
    host: {
      doc: "Database host name/IP",
      format: '*',
      default: 'mysql://root@localhost:3306/ads_test'
    },
  },
  rabbitmq: {
    host: {
      default: 'amqp://localhost:5672',
      env: 'RABBITMQ_HOST'
    }
  }
});

// Load environment dependent configuration
var env = config.get('env');
config.loadFile('./config/' + env + '.json')

config.validate({ allowed: 'strict' });

module.exports = config;