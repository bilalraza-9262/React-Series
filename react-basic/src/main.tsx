import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

// const rootElement = ReactDOM.createRoot(document.getElementById("root")!)
// const element = React.createElement(
//   "a",
//   { href: "https://google.com", className: "container" },
//   "visit to google"
// )


// rootElement.render(element)
