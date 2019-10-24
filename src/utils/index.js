import React from 'react'

export function replaceNewlinesWithBreaks(str, className = '') {
    return str.split('\n').map((section) => {
        if (section === '') {
            return <br />
        }
        return <p className={className}>{section}</p>
    })
}

export function replaceLinksWithAnchors(str, className = '') {
    if (str.indexOf('http') !== -1) {
        // it contains a link
        const outputList = []
        str.split('http').forEach((substr) => {
            if (substr.includes("://")) {
                const [url, afterUrl] = substr.split(' ')
                // url is missing the http so we add it:
                const URL = `http${url}`
                outputList.push(<a rel="noopener noreferrer" target="_blank" href={URL}>{URL}</a>)
                // afterURL might contain text, so we want to add it
                // as a span element with a space seperator
                outputList.push(<span> {afterUrl}</span>)
            } else if (substr) {
                // as long as it is not an empty string, add
                // a span element
                outputList.push(<span> {substr}</span>)
            }
        })

        return <p className={className}>{outputList}</p>
    }
    
    // does not contain a link, return string wrapped in a paragraph
    return <p className={className}>{str}</p>
}