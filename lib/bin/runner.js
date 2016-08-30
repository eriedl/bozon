var Generator  = require('./../scaffolding/generator')
var Starter    = require('./../starting/starter')
var Packager   = require('./../packaging/packager')
var Cleaner    = require('./../clearing/cleaner')
var SpecRunner = require('./../testing/spec_runner')

var runner = {
  new: function (name) {
    new Generator(name).generate()
  },

  start: function (env) {
    new Starter(env).run()
  },

  clear: function () {
    new Cleaner().run()
  },

  package: function (platform, env) {
    new Packager(platform, env).build()
  },

  test: function (args) {
    return new SpecRunner(args).run()
  }
}

module.exports = runner
