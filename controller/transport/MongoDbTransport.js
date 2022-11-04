const Transport = require('./Transport.js')
const { MongoClient } = require('mongodb')
/* CONSTANT */
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017'
const MONGO_DB = process.env.MONGO_DB || 'global-node-service-logs'
const APP_NAME = process.env.APP_NAME || 'global-node-service'
const POOL_SIZE = process.env.POOL_SIZE || 5

module.exports = class MongoDbTransport extends Transport {
  constructor () {
    super()
    this.client = new MongoClient(MONGO_DB_URL, {
      appName: APP_NAME,
      maxPoolSize: POOL_SIZE,
      useUnifiedTopology: true
    })
  }

  async presist (data) {
    try {
      const connect = await this.client.connect()
      const db = await connect.db(MONGO_DB)
      const acknowledged = await (await db.collection('logging').insertOne(data)).acknowledged
      if (!acknowledged) throw new Error('Insert Failed')
    } catch (error) {
      throw new Error('Not Connected!')
    }
  }
}
