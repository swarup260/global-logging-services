/* import dependencies */
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { promisify } from 'util'
/* loaded the *.proto file */
const PROTO_PATH = './src/proto/Logger.proto'
const GRPC_SERVER = process.env.GRPC_SERVER || '127.0.0.1:5500'
/**
 * keepCase instructs the protoLoader to maintain protobuf field names.
 * longs and enums store the data types that represent long and enum values.
 * defaults, when set to true, sets default values for output objects.
 * oneof sets virtual oneof properties to field names.
 */

const loaderOptions = {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
}

// initializing the package definition
const packageDefinition = protoLoader.loadSync(PROTO_PATH, loaderOptions)

const LoggerService = grpc.loadPackageDefinition(packageDefinition).Logger
const logger = new LoggerService(
	GRPC_SERVER,
	grpc.credentials.createInsecure()
)

export default {
	setRequestId: promisify(logger.setRequestId).bind(logger),
	getRequestId: promisify(logger.getRequestId).bind(logger),
	info: promisify(logger.info).bind(logger),
	warn: promisify(logger.warn).bind(logger),
	error: promisify(logger.error).bind(logger),
	danger: promisify(logger.danger).bind(logger)
}
