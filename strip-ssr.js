// what is this about?
// vite is pretty convenient for most things but its SSR support is
// still experimental at the time of making this. so I provided some
// extra scripts that let me create static websites without js.
// this file is part of the `npm run generate` command.
// it will remove any js references from the dist/static/index.html
// and also remove any js files from the dist/static/assets folder
// after this script is ran, the dist/static folder is ready to be
// deployed to my site

const fs = require('fs')

const template = fs.readFileSync('./dist/static/index.html', 'utf-8')
const template_lines = template.split('\n')
const output_lines = []
for (const line of template_lines) {
    const has_link = line.includes('<link')
    const has_js = line.includes('.js"')
    const has_script = line.includes('<script')
    if (has_link && has_js || has_script && has_js) {
        continue;
    }
    output_lines.push(line)
}
const output_html = output_lines.join('\n')

fs.writeFileSync('./dist/static/index.html', output_html)

const files = fs.readdirSync('./dist/static/assets')
for (const file_name of files) {
    if (file_name.endsWith('.js')) {
        const file_path = `./dist/static/assets/${file_name}`
        fs.unlinkSync(file_path)
    }
}
