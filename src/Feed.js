import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
          profilePic="https://avatars.githubusercontent.com/u/123856266?v=4"
          message="Hope this works!"
          timestamp= "09:55:32.55"
          username="Hoon Kang"
          image="https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1300&maxheight=1300&autorotate=false"
        />
        <Post 
          profilePic="https://avatars.githubusercontent.com/u/123856266?v=4"
          message="Wow this works!"
          timestamp= "09:55:32.55"
          username="Hoon Kang"
          
        />
        <Post />
    </div>
  )
}

export default Feed
