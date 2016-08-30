var program = require('commander')
var runner = require('./runner')
var json = require('../../package.json')

program
  .version(json.version)

program
  .command('new <name>')
  .description('Generate scaffold for new Electron application')
  .action(function (name) {
    runner.new(name)
  })

program
  .command('start [env]')
  .description('Compile and run application')
  .action(function (env) {
    runner.start(env)
  })

program
  .command('test [spec]')
  .description('Run tests from spec/ directory')
  .action(function (spec) {
    runner.test(spec).then(function(result) {
      process.exit(result.status);
    })
  })

program
  .command('clear')
  .description('Clear builds and releases directories')
  .action(function () {
    runner.clear()
  })

program
  .command('package <platform> [env]')
  .description('Build and Package applications for platforms defined in package.json')
  .action(function (platform, env) {
    runner.package(platform, env)
  })

program.parse(process.argv)
