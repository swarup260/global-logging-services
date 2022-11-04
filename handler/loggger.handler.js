module.exports = class LoggerHandler {
  /**
   *
   * @param {{controller:import("../controller/logger.controller.js")}} param0
   */
  constructor ({ controller }) {
    this.controller = controller
  }

  setRequestId ({ request }, callback) {
    this.controller.setRequestId(request.requestId)
    callback(null, { requestId: this.controller.getRequestId() })
  }

  getRequestId (_, callback) {
    callback(null, { requestId: this.controller.getRequestId() })
  }

  async log ({ request }, callback) {
    const result = await this.controller.log(request)
    callback(null, result)
  }

  async info ({ request }, callback) {
    const result = await this.controller.info(request)
    callback(null, result)
  }

  async warn ({ request }, callback) {
    const result = await this.controller.warn(request)
    callback(null, result)
  }

  async error ({ request }, callback) {
    const result = await this.controller.error(request)
    callback(null, result)
  }

  async danger ({ request }, callback) {
    const result = await this.controller.danger(request)
    callback(null, result)
  }
}
