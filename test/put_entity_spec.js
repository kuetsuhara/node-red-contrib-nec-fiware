var should = require('should')
var helper = require('node-red-node-test-helper')
var putNode = require('../nec-fiware/put_entity')

helper.init(require.resolve('node-red'))

describe('Put Node', function () {
  this.timeout(5000)

  beforeEach(function (done) {
    helper.startServer(done)
  })

  afterEach(function (done) {
    helper.unload()
    helper.stopServer(done)
  })

  it('should be loaded', function (done) {
    var flow = [{
      id: "e9dd8bf9.7448a8",
      type: "PutEntity",
      name: "",
    }]

    helper.load(putNode, flow, function () {
      var n1 = helper.getNode('e9dd8bf9.7448a8') // FIXME:return null
      console.log(n1)
      n1.should.have.property('name', 'Put Entity')
      done()
    })
  })
})