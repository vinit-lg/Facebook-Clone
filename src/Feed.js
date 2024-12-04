import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
    <StoryReel />
    <MessageSender />

    <Post 
        profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlkU1il-WHCfMhWtQn_szoYAq1THuD_nc-g&usqp=CAU&reload=on"
        message = "Wow this Works!"
        timestamp='This is a timestamp'
        username = 'John'
        image = "https://i.ytimg.com/vi/BeJPO6dusJ8/maxresdefault.jpg"
    />

    <Post 
         profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlkU1il-WHCfMhWtQn_szoYAq1THuD_nc-g&usqp=CAU&reload=on"
        message = "Wow this Works!"
        timestamp='This is a timestamp'
        username = 'John'
        image = "https://i.ytimg.com/vi/BeJPO6dusJ8/maxresdefault.jpg"

    />
    
    </div>
  );
}

export default Feed;