const eshost = require('.');

async function test() {
  const agent = await eshost.createAgent('go-js', { hostPath: '../../bin/go-js' });
  const result = await agent.evalScript(`
    print(1+1);
  `);
  if (result.stdout) {
    console.log(result.stdout);
  }
  if (result.stderr) {
    console.error(result.stderr);
  }
}

test();
