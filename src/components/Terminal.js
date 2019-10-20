import React from 'react'
import { connect } from 'react-redux'

import './Terminal.css'
import TerminalInput from './TerminalInput'


export function Terminal(props) {
    const {
        terminalHistory
    } = props

    return (
        <div className="terminal">
            {terminalHistory}
            <TerminalInput command="" type="dynamic" />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        terminalHistory: state.terminalHistory,
        ...ownProps,
    }
}

export default connect(mapStateToProps)(Terminal)
