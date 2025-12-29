// TODO: Convert to ...args when spread args are supported.
function print(arg) {
  console.log(arg);
}

var $262 = {
  global: globalThis,
  gc: function() {
    throw new Error('gc() not yet supported.');
  },
  createRealm: function(options) {
    throw new Error('createRealm() not yet supported.');
  },
  evalScript: function(code) {
    throw new Error('evalScript() not yet supported.');
  },
  getGlobal: function(name) {
    return this.global[name];
  },
  setGlobal: function(name, value) {
    this.global[name] = value;
  },
  destroy: function() { /* noop */ },
  IsHTMLDDA: function() { return {}; },
  source: $SOURCE,
  // TODO: Uncomment when getters are supported.
  // get agent() {
  //   throw new Error('agent.* not yet supported.');
  // }
};
