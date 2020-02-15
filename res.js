'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};

exports.api_kosong = (res) => {
  var data = {
      'status': 203,
      'message': "API Key not valid",
      'values': null
  };
  res.json(data);
  res.end();
};