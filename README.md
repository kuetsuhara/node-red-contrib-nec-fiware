# node-red-contrib-nec-fiware
node-red custom node for nec fiware (Keio univ.)

# install
```
$ cd $HOME/.node-red
$ npm install node-red-contrib-nec-fiware
```

# sample flow
```
[{"id":"6caf1643.94d888","type":"inject","z":"2ca93200.9acbde","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":220,"wires":[["309e13d.12ad9ec"]]},{"id":"654020e3.8e521","type":"debug","z":"2ca93200.9acbde","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":810,"y":220,"wires":[]},{"id":"309e13d.12ad9ec","type":"template","z":"2ca93200.9acbde","name":"behicle_json","field":"payload","fieldType":"msg","format":"json","syntax":"plain","template":"{ \n   \"id\":\"FujisawaGarbageTruck6\",\n   \"type\":\"Vehicle\",\n   \"location\":{ \n      \"type\":\"geo:point\",\n      \"value\":\"36.312, 113.444\"\n   },\n   \"angle\":{ \n      \"type\":\"Number\",\n      \"value\":\"68\"\n   },\n   \"speed\":{ \n      \"type\":\"Number\",\n      \"value\":\"68\"\n   },\n   \"timestamp\":{ \n      \"type\":\"unixtimestamp\",\n      \"value\":\"1231938981134\"\n   }\n}","output":"str","x":330,"y":220,"wires":[["2cdef79b.94f208"]]},{"id":"2cdef79b.94f208","type":"json","z":"2ca93200.9acbde","name":"","property":"payload","action":"","pretty":false,"x":470,"y":220,"wires":[["8c0dec38.25e71","3178c968.3db5a6"]]},{"id":"8c0dec38.25e71","type":"debug","z":"2ca93200.9acbde","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":560,"y":280,"wires":[]},{"id":"3178c968.3db5a6","type":"CreateEntity","z":"2ca93200.9acbde","name":"","login":"73f6d203.ef2bac","x":630,"y":220,"wires":[["654020e3.8e521"]]},{"id":"a3b38df0.99677","type":"PutEntity","z":"2ca93200.9acbde","name":"","login":"73f6d203.ef2bac","x":620,"y":360,"wires":[["78563dde.326494"]]},{"id":"1e47d8db.126217","type":"inject","z":"2ca93200.9acbde","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":360,"wires":[["93e8ceba.f2aa2"]]},{"id":"93e8ceba.f2aa2","type":"template","z":"2ca93200.9acbde","name":"behicle_json","field":"payload","fieldType":"msg","format":"json","syntax":"plain","template":"{\n    \"entity\": \"FujisawaGarbageTruck1\",\n    \"data\": {\n        \"location\": \n        {\n            \"value\": \"36.312506, 113.444112\"\n        },\n        \"timestamp\": {\n            \"value\": \"155555555\"\n        }\n    }\n}","output":"str","x":330,"y":360,"wires":[["92f7703f.1d49e"]]},{"id":"92f7703f.1d49e","type":"json","z":"2ca93200.9acbde","name":"","property":"payload","action":"","pretty":false,"x":470,"y":360,"wires":[["a3b38df0.99677"]]},{"id":"78563dde.326494","type":"debug","z":"2ca93200.9acbde","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":810,"y":360,"wires":[]},{"id":"73f6d203.ef2bac","type":"nec-fiware-credentials","z":"","nickname":"Default","server":"https://202.149.16.157","authport":"54406","keyrockport":"44306","authcode":"Basic NzFjZWYwMDItZDRjMy00Y2ZkLThiNjYtZTgzNzc5YmZkZTJlOmM5MjZmMzM2LWJlZmItNDQ0Zi1iYTNkLWQ1NWEwZmY1OTkzMA=="}]
```