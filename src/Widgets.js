import React from 'react'
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className="text">
        <h2>Welcome to my Facebook Clone project!</h2>
        <p>
          This project was created using React and Node.js. The backend authentication and database are managed by Firebase. Feel free to add your own posts!
        </p>
        <p>Currently, I have the functionality for adding posts to the timeline as authenticated (or guest) users. I am looking into adding additional functionality such as liking and commenting on posts. Additionally a way for users to add friends! Most of the UI buttons you see were a way for me to practice my React skills and hopefully their functionality will be fleshed out soon as well!</p>
        <p>
          Check me out on <a href='https://github.com/hoon610' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
        </p>
        <p>Thank you for visiting!</p>
      </div>
    </div>
  )
}

export default Widgets
