import React from 'react'
import { connect } from 'react-redux'
import './TerminalWindow.css'

import Terminal from './Terminal'
import TerminalMenu from './TerminalMenu'

export function TerminalWindow(props) {
    return (
        <div className="terminal-window terminal-window-color">
            <div style={{ width: '100%', height: '15%'}}>
                <TerminalMenu />
            </div>
            <div style={{ width: '100%', height: '85%'}}>
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
