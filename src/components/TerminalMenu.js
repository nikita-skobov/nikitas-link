import React from 'react'

export function TerminalMenu(props) {
    return [
        <div className="container mr-0 pr-0 pl-0">
            <div className="row terminal-window-menu">
                <div className="menu-padding col pr-0 pl-0" />
                <div className="menu-padding col pr-0 pl-0 text-center text-white">
                    Nikitas Link
                </div>
                <div className="menu-padding col pr-0 pl-0 text-right">
                    <span className="pl-1 pr-1 oi oi-chevron-bottom" title="chevron bottom" aria-hidden="true" /> 
                    <span className="pl-1 pr-1 oi oi-chevron-top" title="chevron top" aria-hidden="true" />
                    <span className="pl-1 pr-1 oi oi-x" title="x" aria-hidden="true" /> 
                </div>
            </div>
        </div>,
        <div className="container ml-0 pr-0 pl-0">
            <div className="row terminal-window-menu text-white">
                <div className="menu-button col-fluid pl-2 pr-3 pb-1 pt-1">File</div>
                <div className="menu-button col-fluid pl-2 pr-3 pb-1 pt-1">Edit</div>
                <div className="menu-button col-fluid pl-2 pr-3 pb-1 pt-1">View</div>
                <div className="menu-button col-fluid pl-2 pr-3 pb-1 pt-1">Settings</div>
                <div className="menu-button col-fluid pl-2 pr-3 pb-1 pt-1">Help</div>
            </div>
        </div>
    ]
}

export default TerminalMenu
