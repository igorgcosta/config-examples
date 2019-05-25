const config = require('./config')

console.log(`Mysql - host: ${config.get('mysql.host')}`)

console.log(`Elasticsearch - network host: ${config.get('elasticsearch.network.host')}`)
console.log(`Elasticsearch - cluster name: ${config.get('elasticsearch.cluster.name')}`)
console.log(`Elasticsearch - node name: ${config.get('elasticsearch.node.name')}`)

console.log(`RabbitMq - host: ${config.get('rabbitmq.host')}`)

process.exit(0)

// TEM O custom-env QUE É PARECIDO COM ESSE: 
// https://medium.freecodecamp.org/nodejs-custom-env-files-in-your-apps-fa7b3e67abe1



