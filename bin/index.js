#!/usr/bin/env node

var spawn = require('child_process').spawn
var which = require('npm-which')
var npm = which.sync('npm')

spawn(npm, process.argv.slice(2), {stdio: 'inherit'})
