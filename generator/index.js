module.exports = api => {
    api.extendPackage({
        scripts: {
            greet: 'vue-cli-service greet'
          },
      dependencies: {
        'vue-router-layout': '^0.1.2'
      }
    })
    api.render('./template')
}