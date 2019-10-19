import React from 'react'

import {
    replaceNewlinesWithBreaks,
} from './utils'

import TerminalInput from './components/TerminalInput'


const WELCOME = ` 
\\ \\        / / |  ____| | |       / ____|  / __ \\  |  \\/  | |  ____|
 \\ \\  /\\  / /  | |__    | |      | |      | |  | | | \\  / | | |__   
  \\ \\/  \\/ /   |  __|   | |      | |      | |  | | | |\\/| | |  __|  
   \\  /\\  /    | |____  | |____  | |____  | |__| | | |  | | | |____ 
    \\/  \\/     |______| |______|  \\_____|  \\____/  |_|  |_| |______|
`

let htmlFriendlyWelcome = replaceNewlinesWithBreaks(WELCOME.replace(/ /g, '\u00a0'), 'm-0')
// replaces empty spaces with unicode empty space. no margins in the
// paragraph children that replaceNewlinesWithBreaks inserts.

const pixelsPerChar = 10
const welcomeWidth = WELCOME.split('\n')[1].length * pixelsPerChar

if (window.innerWidth < welcomeWidth) {
    htmlFriendlyWelcome = 'WELCOME!'
}

const initialTerminalHistory = [
    <TerminalInput command="./welcome.sh" />,
    <div>
        {htmlFriendlyWelcome}
    </div>,
    <TerminalInput command="dsadsadsadsa" />,
]

export default initialTerminalHistory
