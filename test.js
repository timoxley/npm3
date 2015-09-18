"use strict"

var test = require('tape')
var exec = require('child_process').exec

test('uses npm@^3.0.0', function(t) {
  exec('npm info npm@^3.0.0 version --json | tail -n 1 | cut -d \' \' -f 2', function(err, version) {
    var expected = JSON.parse(version)
    exec('./bin/index.js -v', function(err, actual) {
      actual = actual.trim()
      t.equal(actual, expected, 'uses latest version of npm v3')
      t.end()
    })
  })
})
