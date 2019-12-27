const request = require('request')
const TOKEN_PATH = '/oauth2/token'
const ENTITIES_PATH = '/v2/entities'

module.exports = class FiwareOauthClient {
  constructor(server, auth_port, keyrock_port, auth_code, id, password) {
    this.server = server
    this.auth_port = auth_port
    this.keyrock_port = keyrock_port
    this.auth_code = auth_code
    this.id = id
    this.password = password
  }

  getToken(callback) {
    var url = this.server + ':' + this.auth_port + TOKEN_PATH
    var headers = {
      'Accept': 'application/json',
      'Authorization': this.auth_code,
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    var data = 'username=' + this.id + '&password=' + this.password + '&grant_type=password'

    var option = {
      url: url,
      method: 'POST',
      headers: headers,
      json: true,
      agentOptions: {
        rejectUnauthorized: false,
      },
      form: data
    }

    console.log(option)

    request(option, function (error, response, body) {
      if (error) {
        console.log('error', error)
        callback(error)
      }
      if (response.statusCode == 200) {
        console.log('body', body)
        callback(null, body['access_token'])
      } else {
        console.log('body', body)
        console.log("hooo")
      }
    })
  }

  createEntities(token, callback) {
    var url = this.server + ':' + this.keyrock_port + ENTITIES_PATH
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'fiware-service': '102',
      'fiware-servicepath': '/',
      'X-Auth-Token': token
    }

    var data = {
      'id': 'FujisawaGarbageTruck3',
      'type': 'Vehicle',
      'location': {
        'type': 'geo:point',
        'value': '36.312, 113.444'
      },
      'angle': {
        'type': 'Number',
        'value': '68'
      },
      'speed': {
        'type': 'Number',
        'value': '68'
      },
      'timestamp': {
        'type': 'unixtimestamp',
        'value': '1231938981134'
      }
    }

    var option = {
      url: url,
      method: 'POST',
      headers: headers,
      json: data,
      agentOptions: {
        rejectUnauthorized: false,
      }
    }

    console.log(option)
    request(option, function (error, response, body) {
      console.log("status code", response.statusCode)
      if (error) {
        console.log('error', error)
        callback(error)
      }
      if (response.statusCode == 201) {
        console.log('body', body)
        callback(null, body)
      } else {
        console.log('body', body)
        callback(body, null)
      }
    })
  }
}

// const client = require('./fiware_oauth_client.js')
// var cl = new client('https://202.149.16.157', '54406', '44306', 'usr102@dpc-japan.org', 'uF8JXaNr')
// cl.getToken(function (err, token) {
//   if (err) {
//     console.log('get token error!', err)
//   } else {
//     cl.createEntities(token, function (err, success) {
//       if (err) {
//         console.log('Error createEntities', err)
//       } else {
//         console.log('success!', success)
//       }
//     })
//   }
// })
