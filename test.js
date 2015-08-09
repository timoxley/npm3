"use strict"

var test = require('tape')
var exec = require('child_process').exec

test('uses npm@3.0-next', function(t) {
  exec('npm info npm dist-tags.3.0-next', function(err, expected) {
    expected = expected.trim()
    exec('./bin/index.js -v', function(err, actual) {
      actual = actual.trim()
      t.equal(actual, expected, 'uses 3.0-next version')
      t.end()
    })
  })
})
