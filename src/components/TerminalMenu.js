import React from 'react'
import './TerminalWindow.css'

export function TerminalMenu(props) {
    return (
        <div className="container container-fix pr-0 pl-0">
            <div className="row terminal-window-menu">
                <div className="col pr-0 pl-0" />
                <div className="col pr-0 pl-0 text-center text-white">
                    Nikitas Link
                </div>
                <div className="col pr-0 pl-0 text-right">
                    <span className="pl-1 pr-1 oi oi-chevron-bottom" title="chevron bottom" aria-hidden="true" /> 
                    <span className="pl-1 pr-1 oi oi-chevron-top" title="chevron top" aria-hidden="true" />
                    <span className="pl-1 pr-1 oi oi-x" title="x" aria-hidden="true" /> 
                </div>
            </div>
        </div>
    )
}

export default TerminalMenu
