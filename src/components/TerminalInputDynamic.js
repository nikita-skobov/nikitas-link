import React from 'react'

export class TerminalInputDynamic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cursorVisible: true,
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        setTimeout(() => {
            this.setState(prev => ({ cursorVisible: !prev.cursorVisible }))
            this.toggle()
        }, 800)
    }

    componentDidMount() {
        this.toggle()
    }
    
    render() {
        const {
            cursorVisible
        } = this.state

        if (cursorVisible) {
            return <span className="caret-color"> </span>
        }

        return <span />
    }
}

export default TerminalInputDynamic
