import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    ));
  }, []);

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        {posts.map(post => (
          <Post
            key={post.id}
            message={post.message}
            timestamp={post.timestamp}
            username={post.username}
            image={post.image}
            profilePic={post.profilePic}

          />
        ))}
    </div>
  )
}

export default Feed
