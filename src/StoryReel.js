import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
        image="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/384790617_18395475604040433_7141740989139094188_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=fe3215&_nc_ohc=OUVv5NHBckQAX89Kmf8&_nc_ht=scontent-bos5-1.xx&oh=00_AfDrF4rv3ujYQNIQ4-j1t0bI8Z5j5weUbuh1FfkipL9AfA&oe=651ED095"
        profileSrc="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        title="William Lopez"
        />
        <Story
        image="https://upload.wikimedia.org/wikipedia/commons/e/e8/The_PEFO_Tepees.jpg"
        profileSrc="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        title="James Lochte"
        />
        <Story
        image="https://cdn.britannica.com/42/193842-050-99D0D726/Visitor-saguaro-cactus-Saguaro-National-Park-Arizona.jpg"
        profileSrc="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww&w=1000&q=80"
        title="Kenna Mirvan"
        />
        <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/USA_Antelope-Canyon.jpg/1200px-USA_Antelope-Canyon.jpg"
        profileSrc="https://i.dailymail.co.uk/i/pix/2014/04/23/article-2611078-1D48BA1600000578-1000_306x477.jpg"
        title="Annie-Sara Yaore"
        />
        <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Horseshoe_Bend_panorama.jpg/1200px-Horseshoe_Bend_panorama.jpg"
        profileSrc="https://media.istockphoto.com/id/931693612/photo/the-happy-business-afro-american-man-standing-and-smiling-against-blue-background-profile-view.jpg?s=612x612&w=0&k=20&c=zIyYNBPzP_jORk0k-PycWmAUTNNdcwPccbXOE5CSChU="
        title="Aaron Bernanid"
        />
    </div>
  )
}

export default StoryReel
