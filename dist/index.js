'use strict';

var _require = require('@elastic/elasticsearch'),
    Client = _require.Client;

var client = new Client({ node: 'http://localhost:9200' });

// promise API
var result = client.search({
  index: 'my-index',
  body: { foo: 'bar' }
});

// callback API
client.search({
  index: 'my-index',
  body: { foo: 'bar' }
}, function (err, result) {
  if (err) console.log(err);
});