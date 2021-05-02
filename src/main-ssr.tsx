import ReactDOMServer from 'react-dom/server'
import './index.css'
import App from './App'
import React from 'react'

// note that we need the url/context
// if we want to do any sort of routing, but
// in this example we dont care about that
export function render(url: any, context: any) {
    return ReactDOMServer.renderToString(
        <App />
    )
}
