// what is this about?
// vite is pretty convenient, but its SSR support is still experimental.
// this is a modified version of their prerender script that they have
// here: https://github.com/vitejs/vite/blob/main/packages/playground/ssr-react/package.json
// I modified it because I dont need to support multiple pages

const fs = require('fs')

const template = fs.readFileSync('./dist/static/index.html', 'utf-8')
const { render } = require('./dist/server/main-ssr.js')

;(async () => {
    const context = {}
    // call the render function provided from our ssr.js entrypoint
    // which will return a string of rendered html
    const appHtml = await render('/', context)
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = 'dist/static/index.html'
    fs.writeFileSync(filePath, html)
    console.log(`pre rendered ${filePath}`)
})()
