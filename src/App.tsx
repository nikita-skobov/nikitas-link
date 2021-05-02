import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <a href="#">Nikita's Link</a>
        <nav>
          <a href="https://github.com/nikita-skobov">Code</a>
          <a href="https://blog.nikitas.link">Blog</a>
          <a href="mailto:skobo002@umn.edu">Email</a>
        </nav>
      </header>
      <div>
        <div className="row">
          <div className="column">
            <img
              id="profilepic"
              src="https://avatars.githubusercontent.com/u/39128800?v=4"
              alt="aaaa"
            />
          </div>
          <div className="column">
            <p id="aboutmetext">
              My name is Nikita Skobov. I like to make things. I work on a variety of open source projects, some of which you can find below. I studied statistics and computer science at the University of Minnesota. Sometimes I write about stuff on my blog: usually about software development, but not always.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default App
