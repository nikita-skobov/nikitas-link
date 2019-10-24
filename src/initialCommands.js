import React from 'react'

import {
    replaceNewlinesWithBreaks,
    replaceLinksWithAnchors,
} from './utils'

import {
    ABOUT,
    STATUS,
    MY_LINKS,
} from './constants'

import TerminalInput from './components/TerminalInput'


const WELCOME = ` 
\\ \\        / / |  ____| | |       / ____|  / __ \\  |  \\/  | |  ____|
 \\ \\  /\\  / /  | |__    | |      | |      | |  | | | \\  / | | |__   
  \\ \\/  \\/ /   |  __|   | |      | |      | |  | | | |\\/| | |  __|  
   \\  /\\  /    | |____  | |____  | |____  | |__| | | |  | | | |____ 
    \\/  \\/     |______| |______|  \\_____|  \\____/  |_|  |_| |______|
`

const HELLO_WORLD = ` _    _ ______ _      _      ____   __          ______  _____  _      _____  
| |  | |  ____| |    | |    / __ \\  \\ \\        / / __ \\|  __ \\| |    |  __ \\ 
| |__| | |__  | |    | |   | |  | |  \\ \\  /\\  / / |  | | |__) | |    | |  | |
|  __  |  __| | |    | |   | |  | |   \\ \\/  \\/ /| |  | |  _  /| |    | |  | |
| |  | | |____| |____| |___| |__| |    \\  /\\  / | |__| | | \\ \\| |____| |__| |
|_|  |_|______|______|______\\____/      \\/  \\/   \\____/|_|  \\_\\______|_____/ 
`

let htmlFriendlyWelcome = replaceNewlinesWithBreaks(HELLO_WORLD.replace(/ /g, '\u00a0'), 'm-0')
// replaces empty spaces with unicode empty space. no margins in the
// paragraph children that replaceNewlinesWithBreaks inserts.

const pixelsPerChar = 10
const welcomeWidth = HELLO_WORLD.split('\n')[1].length * pixelsPerChar

if (window.innerWidth < welcomeWidth) {
    htmlFriendlyWelcome = 'Hello World!'
}

console.log(MY_LINKS)
MY_LINKS.forEach((link) => {
    console.log(replaceLinksWithAnchors(link))
})

const initialTerminalHistory = [
    <TerminalInput command="./hello_world.sh" />,
    <div>
        {htmlFriendlyWelcome}
    </div>,
    <TerminalInput command="cat about_me.txt" />,
    <div>
        {replaceNewlinesWithBreaks(ABOUT)}
        {STATUS.reduce((p, c) => `${p}\n${c}`)}
    </div>,
    <TerminalInput command="cat my_links.txt" />,
    <div>
        {MY_LINKS.map((str) => replaceLinksWithAnchors(str, 'm-0'))}
    </div>
]

export default initialTerminalHistory
