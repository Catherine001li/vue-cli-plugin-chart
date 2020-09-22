module.exports = pkg => {
    const prompts = [
      {
        type: 'input',
        name: 'locale',
        message: 'The locale of project localization.',
        validate: input => !!input,
        default: 'en'
      }
    ]
  
    // 添加动态对话
    if ('@vue/cli-plugin-eslint' in (pkg.devDependencies || {})) {
      prompts.push({
        type: 'confirm',
        name: 'useESLintPluginVueI18n',
        message: 'Use ESLint plugin for Vue I18n ?'
      })
    }
  
    return prompts
  }