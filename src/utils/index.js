import React from 'react'

export function replaceNewlinesWithBreaks(str) {
    return str.split('\n').map((section) => {
        if (section === '') {
            return <br />
        }
        return <p>{section}</p>
    })
}
