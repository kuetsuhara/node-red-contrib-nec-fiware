module.exports = function (RED) {
  'use strict'
  function NecFiwareCredentialsNode(config) {
    RED.nodes.createNode(this, config)
    this.server = config.server
    if (this.credentials) {
      this.id = this.credentials.id
      this.password = this.credentials.password
    }
  }
  RED.nodes.registerType('nec-fiware-credentials', NecFiwareCredentialsNode, {
    credentials: {
      id: { type: 'text' },
      password: { type: 'password' }
    }
  })
}