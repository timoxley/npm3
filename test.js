'use strict'

var test = require('tape')
var exec = require('child_process').exec

test('uses npm@^3.0.0', function (t) {
  exec('npm info npm@^3.0.0 version --json', function (err, version) {
    t.ifError(err)
    t.ok(version, 'has version')
    var expected = JSON.parse(version).pop()
    exec('./bin/index.js -v', function (err, actual) {
      t.ifError(err)
      actual = actual.trim()
      t.equal(actual, expected, 'uses latest version of npm v3')
      t.end()
    })
  })
})

test('exit error codes match', function (t) {
  exec('npm ls asdasd', function (expectedErr) {
    t.ok(expectedErr)
    t.ok(expectedErr.code, 'expected has non-zero err code')
    exec('./bin/index.js ls asdasd', function (actualErr) {
      t.equal(expectedErr.code, actualErr.code, 'expected error code matches actual code')
      t.end()
    })
  })
})

test('exec matches', function (t) {
  exec('npm ls npm --json', function (err, expected) {
    t.ifError(err)
    expected = JSON.parse(expected)
    exec('./bin/index.js ls npm --json', function (err, actual) {
      t.ifError(err)
      actual = JSON.parse(actual)
      t.deepEqual(expected, actual, 'output matches npm3')
      t.end()
    })
  })
})
