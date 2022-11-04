/* import dependencies */
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const ConsoleTransport = require('./controller/transport/ConsoleTransport')
const LoggerController = require('./controller/logger.controller.js')
// const MongoDbTransport = require('./controller/transport/MongoDbTransport.js')
const LoggerHandler = require('./handler/loggger.handler.js')
/* loaded the *.proto file */
const PROTO_PATH = './proto/Logger.proto'
/* GRPC PORT */
const PORT = process.env.PORT || 5500

/**
 * keepCase instructs the protoLoader to maintain protobuf field names.
 * longs and enums store the data types that represent long and enum values.
 * defaults, when set to true, sets default values for output objects.
 * oneof sets virtual oneof properties to field names.
 */
/* initialize an object for storing the protobuf loader */
const loaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

// initializing the package definition
const packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions)

/*  gRPC object */
const grpcObj = grpc.loadPackageDefinition(packageDef)

const server = new grpc.Server()

/* bind proto to handler  */
server.addService(grpcObj.Logger.service, new LoggerHandler({
  controller: new LoggerController({
    transports: [
      new ConsoleTransport()
      // new MongoDbTransport()
    ]
  })
}))

/* bind the server to a port and start it using the bindAsync method */
server.bindAsync(
  `127.0.0.1:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
    server.start()
    if (error) {
      console.log(error)
    }
  }
)
