import fastify from "fastify";
import EventEmitter from "events";

/**
 * Foundation for managing HTTP interaction based apps
 */
class Client extends EventEmitter {
  /**
   * @param {ClientOptions} options
   */
  constructor(options) {
    super({ captureRejections: true });
    /**
     * @type {import("fastify").FastifyInstance}
     * @private
     */
    this.server = fastify();
  }

  /**
   * @param {import("fastify").FastifyListenOptions} startOptions
   */
  start(startOptions) {
    this.server.listen({ port: startOptions?.port ?? 3000 });
    this.emit("start");
  }
}

export default Client;
