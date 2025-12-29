'use strict';

const fs = require('fs');
const runtimePath = require('../runtime-path');
const ConsoleAgent = require('../ConsoleAgent');
const errorexp = /^(\w+): (.*)$/m;

class GoJSAgent extends ConsoleAgent {
  async evalScript(code, options = {}) {
    // if (options.module && this.args[0] !== '--module') {
    //   this.args.unshift('--module');
    // }

    // if (!options.module && this.args[0] === '--module') {
    //   this.args.shift();
    // }
    // // -N run test prepared by test262-harness+eshost
    // if (!this.args.includes('-N')) {
    //   this.args.push('-N');
    // }

    if (!this.args.includes('run')) {
      this.args.push('run');
    }

    return super.evalScript(code, options);
  }

  parseError(str) {
    const match = str.match(errorexp);

    if (!match) {
      return null;
    }

    return {
      name: match[1],
      message: match[2],
      stack: [],
    };
  }

  normalizeResult(result) {
    errorexp.lastIndex = 0;

    const ematch = errorexp.exec(result.stdout);

    let match;

    if (ematch) {
      match = ematch[0];
    }

    if (match) {
      result.stdout = '';
      result.stderr = match;
    }

    return result;
  }
}

GoJSAgent.runtime = fs.readFileSync(runtimePath.for('go-js'), 'utf8');

module.exports = GoJSAgent;
