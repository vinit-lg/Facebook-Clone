import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar} from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = e => {
        e.preventDefault();


        setInput("");
        setImageUrl("");
    };


  return (
    <div className="messageSender">
    <div className="messageSender_top">
    <Avatar />
    <form >
        <input 
        value={input}
        onChange = {(e) => setInput(e.target.value)}
        className="messageSender_input"
        placeholder={"what's on your mind?"}
        />

        <input 
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="image URL (Optional)" />

        <button onClick={handleSubmit} type="submit">
            Hidden Submit
        </button>
    </form>
    </div>

    <div className="messageSender_bottom">
    <div className="messageSender_options">
        <VideoCamIcon style={{color: "red"}} />
        <h3>Live Video</h3>
    </div>

    <div className="messageSender_options">
        <PhotoLibraryIcon style={{color: "green"}} />
        <h3>Photo/Video</h3>
    </div>

    <div className="messageSender_options">
        <InsertEmoticonIcon style={{color: "orange"}} />
        <h3>Feeling Activity</h3>
    </div>
    </div>
    </div>
  );
}

export default MessageSender