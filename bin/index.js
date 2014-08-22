#!/usr/bin/env node

var spawn = require('child_process').spawn
var npm = require.resolve('npm/cli')

spawn(npm, process.argv.slice(2), {stdio: 'inherit'})
