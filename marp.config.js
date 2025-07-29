const { Marp } = require('@marp-team/marp-core')
const markdownItKroki = require('@kazumatu981/markdown-it-kroki')

module.exports = {
  engine: opts => new Marp(opts)
    .use(markdownItKroki, {
      entrypoint: 'https://kroki.io',
      marpKrokiPlugin: true
    }),
  themeSet: ['./theme/wmotoai.css']
}