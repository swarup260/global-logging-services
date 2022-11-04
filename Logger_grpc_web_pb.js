/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./Logger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LoggerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LoggerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RequestId,
 *   !proto.RequestId>}
 */
const methodDescriptor_Logger_setRequestId = new grpc.web.MethodDescriptor(
  '/Logger/setRequestId',
  grpc.web.MethodType.UNARY,
  proto.RequestId,
  proto.RequestId,
  /**
   * @param {!proto.RequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RequestId.deserializeBinary
);


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.RequestId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RequestId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.setRequestId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/setRequestId',
      request,
      metadata || {},
      methodDescriptor_Logger_setRequestId,
      callback);
};


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RequestId>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.setRequestId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/setRequestId',
      request,
      metadata || {},
      methodDescriptor_Logger_setRequestId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.RequestId>}
 */
const methodDescriptor_Logger_getRequestId = new grpc.web.MethodDescriptor(
  '/Logger/getRequestId',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.RequestId,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RequestId.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.RequestId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RequestId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.getRequestId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/getRequestId',
      request,
      metadata || {},
      methodDescriptor_Logger_getRequestId,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RequestId>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.getRequestId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/getRequestId',
      request,
      metadata || {},
      methodDescriptor_Logger_getRequestId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoggerTypeDetails,
 *   !proto.Response>}
 */
const methodDescriptor_Logger_log = new grpc.web.MethodDescriptor(
  '/Logger/log',
  grpc.web.MethodType.UNARY,
  proto.LoggerTypeDetails,
  proto.Response,
  /**
   * @param {!proto.LoggerTypeDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.LoggerTypeDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.log =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/log',
      request,
      metadata || {},
      methodDescriptor_Logger_log,
      callback);
};


/**
 * @param {!proto.LoggerTypeDetails} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.log =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/log',
      request,
      metadata || {},
      methodDescriptor_Logger_log);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoggerDetails,
 *   !proto.Response>}
 */
const methodDescriptor_Logger_info = new grpc.web.MethodDescriptor(
  '/Logger/info',
  grpc.web.MethodType.UNARY,
  proto.LoggerDetails,
  proto.Response,
  /**
   * @param {!proto.LoggerDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/info',
      request,
      metadata || {},
      methodDescriptor_Logger_info,
      callback);
};


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/info',
      request,
      metadata || {},
      methodDescriptor_Logger_info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoggerDetails,
 *   !proto.Response>}
 */
const methodDescriptor_Logger_warn = new grpc.web.MethodDescriptor(
  '/Logger/warn',
  grpc.web.MethodType.UNARY,
  proto.LoggerDetails,
  proto.Response,
  /**
   * @param {!proto.LoggerDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.warn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/warn',
      request,
      metadata || {},
      methodDescriptor_Logger_warn,
      callback);
};


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.warn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/warn',
      request,
      metadata || {},
      methodDescriptor_Logger_warn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoggerDetails,
 *   !proto.Response>}
 */
const methodDescriptor_Logger_error = new grpc.web.MethodDescriptor(
  '/Logger/error',
  grpc.web.MethodType.UNARY,
  proto.LoggerDetails,
  proto.Response,
  /**
   * @param {!proto.LoggerDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.error =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/error',
      request,
      metadata || {},
      methodDescriptor_Logger_error,
      callback);
};


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.error =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/error',
      request,
      metadata || {},
      methodDescriptor_Logger_error);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoggerDetails,
 *   !proto.Response>}
 */
const methodDescriptor_Logger_danger = new grpc.web.MethodDescriptor(
  '/Logger/danger',
  grpc.web.MethodType.UNARY,
  proto.LoggerDetails,
  proto.Response,
  /**
   * @param {!proto.LoggerDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LoggerClient.prototype.danger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Logger/danger',
      request,
      metadata || {},
      methodDescriptor_Logger_danger,
      callback);
};


/**
 * @param {!proto.LoggerDetails} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.LoggerPromiseClient.prototype.danger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Logger/danger',
      request,
      metadata || {},
      methodDescriptor_Logger_danger);
};


module.exports = proto;

