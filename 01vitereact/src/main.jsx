import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement= {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click here! To visit google'
// }

const reactElement = React.createElement(
    'a',
    {
        href : 'https://www.google.com',
        target : '_blank'
    },
    'click to visit google'
)

const anotherElement = (
    <a href="https://google.com" tager='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // MyApp()
    // ReactElement
    // anotherElement
    reactElement
)
