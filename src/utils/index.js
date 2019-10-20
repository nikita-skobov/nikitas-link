import React from 'react'

export function replaceNewlinesWithBreaks(str, className = '') {
    return str.split('\n').map((section) => {
        if (section === '') {
            return <br />
        }
        return <p className={className}>{section}</p>
    })
}
