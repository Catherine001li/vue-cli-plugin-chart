module.exports = api => {
    api.registerCommand(
        'greet',
        {
          description: 'Write a greeting to the console',
          usage: 'vue-cli-service greet',
          options: { '--name': 'specifies a name for greeting' }
        },
        args => {
          if (args.name) {
            console.log(` Hello, ${args.name}!`);
          } else {
            console.log(`Hello!`);
          }
        }
      )

  }