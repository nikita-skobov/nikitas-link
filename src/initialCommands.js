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

const initialTerminalHistory = [
    <TerminalInput command="cat myfile.txt" />,
    <div>{replaceNewlinesWithBreaks(WELCOME.replace(/ /g, '\u00a0'), 'm-0')}</div>,
    <TerminalInput command="dsadsadsadsa" />,
]

export default initialTerminalHistory
