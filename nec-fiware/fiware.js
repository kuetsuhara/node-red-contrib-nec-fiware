module.exports = function (RED) {
  'use strict'
  function NecFiwareCredentialsNode(config) {
    RED.nodes.createNode(this, config)
    this.server = config.server
    this.authport = config.authport
    this.keyrockport = config.keyrockport
    this.authcode = config.authcode
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