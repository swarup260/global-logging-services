const Transport = require('./Transport.js')

module.exports = class ConsoleTransport extends Transport {
  presist (data) {
    console.log({ data })
  }
}
