const foClient = require('./fiware_oauth_client.js')

module.exports = function (RED) {
  'use strict'
  function CreateEntityNode(config) {
    RED.nodes.createNode(this, config)
    this.login = RED.nodes.getNode(config.login)
    if (!this.login) {
      console.log('not login ??')
      node.status({
        fill: 'red',
        shape: 'dot',
        text: 'Credential error'
      })
      node.error('No credentials specified')
      return
    }

    var node = this

    node.on('input', function (msg) {
      var cl = new foClient(
        this.login.server,
        this.login.authport,
        this.login.keyrockport,
        this.login.authcode,
        this.login.id,
        this.login.password)

      cl.getToken(function (err, token) {
        node.status({ fill: 'green', shape: 'dot', text: 'request...' })
        if (err) {
          node.status({ fill: 'red', shape: 'dot', text: 'error' })
          console.log("get token error!", err)
        } else {
          // GET applications
          cl.createEntities(token, msg.payload, function (err, success) {
            if (err) {
              console.log("get createEntities error!", err)
              node.status({ fill: 'red', shape: 'dot', text: 'error' })
              msg.payload = err
              node.send(msg)
            } else {
              console.log(success)
              node.status({})
              msg.payload = success
              node.send(msg)
            }
          })
        }
      })
    })
    node.on('close', function () {
      node.status({})
    })
  }
  RED.nodes.registerType('CreateEntity', CreateEntityNode)
}