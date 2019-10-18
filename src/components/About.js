import React from 'react'


import { NAME, ABOUT, STATUS } from '../constants'
import { replaceNewlinesWithBreaks } from '../utils'


export function About() {
    return (
        <div>
            <h1>{NAME}</h1>
            <div>
                {replaceNewlinesWithBreaks(ABOUT)}
            </div>
            <ul>
                {
                    STATUS.map(s => <li key={s}>{s}</li>)
                }
            </ul>
        </div>
    )
}


export default About
