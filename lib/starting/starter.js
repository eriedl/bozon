var bozon = require('../bozon')
var Builder = require('../building/builder')

var Starter = (function () {
  function Starter (env) {
    this.env = (env !== 'development' && env !== 'production' ? 'development' : env);
    this.settings = new bozon.Settings()
  }

  Starter.prototype.run = function () {
    new Builder(this.settings.platform(), this.env).run()
    bozon.runElectron(this.env)
  }
  return Starter
}
)()

module.exports = Starter
