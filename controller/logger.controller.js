class LoggerController {
  /**
     *
     * @param {{transports:import("./Transport")[]}} param0
     */
  constructor ({ transports }) {
    this.transports = transports
    this.data = {}
  }

  setRequestId (requestID) {
    this.requestID = requestID
  }

  getRequestId () {
    return this.requestID
  }

  setData (data) {
    this.data = data
    return this
  }

  getData () {
    return this.data
  }

  async persist () {
    for (let index = 0; index < this.transports.length; index++) {
      await this.transports[index].presist(this.data)
    }
    return this
  }

  /**
     *
     * @param {{request:any,response:any,requestID:string,message:string,logLevel:string,moduleName:string,code:number:params:any}} param0
     */
  async log ({ request, response, logLevel, message = '', moduleName = 'default', code = 1000, params = {} }) {
    try {
      this.setData({
        requestID: this.requestID,
        request,
        response,
        message,
        LOG_LEVEL: logLevel,
        moduleName,
        code,
        timestamp: new Date()

      })

      await this.persist()
      return { status: 1, message: 'success', respcode: 1000 }
    } catch (error) {
      return { status: 0, message: error.message, respcode: 1001 }
    }
  }

  /**
     *
     * @param {{request:any,response:any,requestID:string,message:string,moduleName:string,code:number:params:any}} param0
     */
  async info ({ request, response, message = '', moduleName = 'default', code = 1000, params = {} }) {
    const LOG_LEVEL = 'INFO'
    try {
      this.setData({
        requestID: this.requestID,
        request,
        response,
        message,
        LOG_LEVEL,
        moduleName,
        code,
        timestamp: new Date()

      })

      await this.persist()
      return { status: 1, message: 'success', respcode: 1000 }
    } catch (error) {
      return { status: 0, message: error.message, respcode: 1001 }
    }
  }

  /**
     *
     * @param {{request:any,response:any,requestID:string,message:string,moduleName:string,code:number:params:any}} param0
     */
  async warn ({ request, response, message = '', moduleName = 'default', code = 1000, params = {} }) {
    const LOG_LEVEL = 'WARNING'
    try {
      this.setData({
        requestID: this.requestID,
        request,
        response,
        message,
        LOG_LEVEL,
        moduleName,
        code,
        timestamp: new Date()

      })

      await this.persist()
      return { status: 1, message: 'success', respcode: 1000 }
    } catch (error) {
      return { status: 0, message: error.message, respcode: 1001 }
    }
  }

  /**
     *
     * @param {{request:any,response:any,requestID:string,message:string,moduleName:string,code:number:params:any}} param0
     */
  async error ({ request, response, message = '', moduleName = 'default', code = 1000, params = {} }) {
    const LOG_LEVEL = 'ERROR'
    try {
      this.setData({
        requestID: this.requestID,
        request,
        response,
        message,
        LOG_LEVEL,
        moduleName,
        code,
        timestamp: new Date()

      })

      await this.persist()
      return { status: 1, message: 'success', respcode: 1000 }
    } catch (error) {
      return { status: 0, message: error.message, respcode: 1001 }
    }
  }

  /**
     *
     * @param {{request:any,response:any,requestID:string,message:string,moduleName:string,code:number:params:any}} param0
     */
  async danger ({ request, response, message = '', moduleName = 'default', code = 1000, params = {} }) {
    const LOG_LEVEL = 'DANGER'
    try {
      this.setData({
        requestID: this.requestID,
        request,
        response,
        message,
        LOG_LEVEL,
        moduleName,
        code,
        timestamp: new Date()

      })

      await this.persist()
      return { status: 1, message: 'success', respcode: 1000 }
    } catch (error) {
      return { status: 0, message: error.message, respcode: 1001 }
    }
  }
}

module.exports = LoggerController
