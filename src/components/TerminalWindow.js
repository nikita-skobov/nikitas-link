import React from 'react'
import { connect } from 'react-redux'
import './TerminalWindow.css'

import Terminal from './Terminal'
import TerminalMenu from './TerminalMenu'

export function TerminalWindow(props) {
    return (
        <div className="terminal-window-bounds">
            <div className="window-shadow terminal-window terminal-window-color">
                <TerminalMenu />
                <Terminal />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    }
}

export default connect(mapStateToProps)(TerminalWindow)
