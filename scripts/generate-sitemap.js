const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata.json')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')
  const pages = await globby([
    'app/**/page.js',
    'data/**/*.mdx',
    'data/**/*.md',
    'public/tags/**/index.xml',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .filter((page) => !page.includes('['))
              .map((page) => {
                let path = page
                  .replace('app/', '')
                  .replace(/\/?page\.js$/, '')
                  .replace('data/blog', 'blog')
                  .replace('public/', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/index.xml', '')
                  .replace('/feed.xml', '')
                const route = path === 'page' ? '' : `/${path}`
                return `
                        <url>
                            <loc>${`${siteMetadata.siteUrl}${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()