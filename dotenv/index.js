const config = require('./config')

console.log(`Mysql - host: ${config.mysql.host}`)

console.log(`Elasticsearch - network host: ${config.elasticsearch.network.host}`)
console.log(`Elasticsearch - cluster name: ${config.elasticsearch.cluster.name}`)
console.log(`Elasticsearch - node name: ${config.elasticsearch.node.name}`)

console.log(`RabbitMq - host: ${config.rabbitmq.host}`)

process.exit(0)

// TEM O custom-env QUE É PARECIDO COM ESSE: 
// https://medium.freecodecamp.org/nodejs-custom-env-files-in-your-apps-fa7b3e67abe1