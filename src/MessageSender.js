import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore"; // Import serverTimestamp

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const MAX_CHARACTERS = 350;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > MAX_CHARACTERS) {
      alert(
        `Character limit exceeded. Maximum ${MAX_CHARACTERS} characters allowed.`
      );
      return;
    }
    db.collection("posts").add({
      message: input,
      timestamp: serverTimestamp(),
      profilePic:
        user.photoURL ||
        "https://cdn0.iconfinder.com/data/icons/online-shop-equitment-gliph/32/line-2_on_going_logo-02-512.png",
      username: user.displayName || "Guest",
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on you mind, ${user.displayName}?`}
            type="text"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"Image URL (Optional)"}
            type="text"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
