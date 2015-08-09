"use strict"

var test = require('tape')
var exec = require('child_process').exec

test('uses npm@3.0-next', function(t) {
  exec('npm info npm dist-tags --json', function(err, jsonText) {
    var expected = JSON.parse(jsonText)['3.0-next']
    exec('./bin/index.js -v', function(err, actual) {
      actual = actual.trim()
      t.equal(actual, expected, 'uses 3.0-next version')
      t.end()
    })
  })
})
