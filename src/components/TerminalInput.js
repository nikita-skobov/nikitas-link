import React from 'react'

import TerminalInputDynamic from './TerminalInputDynamic'

export function TerminalInput(props) {
    // can be static, or dynamic.
    // static is just a previous input that has been entered.
    const {
        type = 'static',
        dirColor = 'white',
        userColor = '#74dba7',
        command,
        user = 'admin',
        machine = 'server',
        dir = '~',
    } = props


    const userStyle = { color: userColor }
    const dirStyle = { color: dirColor }

    // else type === 'static'
    return (
        <div>
            <span style={userStyle}>
                [{user}@{machine} <span style={dirStyle}>{dir}</span>]$
            </span>
            <span> </span>
            {type === 'dynamic' ? <TerminalInputDynamic /> : command}
        </div>
    )
}

export default TerminalInput
