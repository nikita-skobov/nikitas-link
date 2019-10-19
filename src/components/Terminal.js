import React from 'react'
import { connect } from 'react-redux'

import './Terminal.css'


export function Terminal(props) {
    const {
        terminalHistory
    } = props

    return (
        <div className="terminal">
            {terminalHistory}
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
