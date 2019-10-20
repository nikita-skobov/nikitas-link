import { combineReducers } from 'redux'

import initialTerminalHistory from '../initialCommands'

const initialStates = {
    terminalHistory: initialTerminalHistory,
}

export function terminalHistory(
    state = initialStates.terminalHistory,
    action,
) {
    switch (action.type) {
        default:
            return state
    }
}


export default combineReducers({
    terminalHistory: terminalHistory,
})
