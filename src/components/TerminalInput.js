import React from 'react'


export function TerminalInput(props) {
    // can be static, or input.
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

    if (type === 'input') {
        return <div>Havent made input yet oops.</div>
    }

    const userStyle = { color: userColor }
    const dirStyle = { color: dirColor }

    // else type === 'static'
    return (
        <div>
            <span style={userStyle}>
                [{user}@{machine} <span style={dirStyle}>{dir}</span>]$
            </span>
            {command}
        </div>
    )
}

export default TerminalInput
