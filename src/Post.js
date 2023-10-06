import React, { useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CommentSection from "./CommentSection";
import db from "./firebase";
import { serverTimestamp } from "firebase/firestore";
import { useStateValue } from "./StateProvider";

function Post({ profilePic, image, username, timestamp, message, postId }) {
  const [showComments, setShowComments] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const formattedTimestamp = new Date(timestamp?.toDate()).toLocaleString();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchCommentsCount = async () => {
      try {
        const commentsRef = db
          .collection("comments")
          .where("postId", "==", postId);

        const unsubscribe = commentsRef.onSnapshot((snapshot) => {
          const commentsCount = snapshot.size; // Get the updated comments count
          setCommentsCount(commentsCount);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching comments count:", error);
      }
    };
    const setupLikesListener = () => {
      const likesRef = db.collection("likes").where("postId", "==", postId);

      // Subscribe to real-time updates
      const unsubscribe = likesRef.onSnapshot((snapshot) => {
        const likesCount = snapshot.size; // Get the updated likes count
        setLikesCount(likesCount);
      });

      // Clean up the listener when the component unmounts or postId changes
      return () => unsubscribe();
    };

    setupLikesListener();
    fetchCommentsCount();

    const initialLikeRef = db
      .collection("likes")
      .where("postId", "==", postId)
      .where("userId", "==", user.uid);
    initialLikeRef.get().then((snapshot) => {
      setUserLiked(!snapshot.empty);
    });
  }, [postId, user]);

  // Function to handle like
  const handleLike = async () => {
    try {
      const likeRef = db
        .collection("likes")
        .where("postId", "==", postId)
        .where("userId", "==", user.uid);
      const snapshot = await likeRef.get();

      if (snapshot.empty) {
        // User has not liked the post, so add a new like
        await db.collection("likes").add({
          postId,
          userId: user.uid,
          timestamp: serverTimestamp(),
        });
      } else {
        // User has already liked the post, so remove their like
        snapshot.forEach(async (doc) => {
          await db.collection("likes").doc(doc.id).delete();
        });
      }

      // Check if the user has liked the post and update the state
      const updatedLikeRef = db
        .collection("likes")
        .where("postId", "==", postId)
        .where("userId", "==", user.uid);
      const updatedLikeSnapshot = await updatedLikeRef.get();
      setUserLiked(!updatedLikeSnapshot.empty);

      // Fetch the latest likes count after the like/unlike operation
      const updatedLikesRef = db
        .collection("likes")
        .where("postId", "==", postId);
      const updatedLikesSnapshot = await updatedLikesRef.get();
      const updatedLikesCount = updatedLikesSnapshot.size;
      setLikesCount(updatedLikesCount);
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{formattedTimestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          <ThumbUpIcon
            className={`post__likeIcon ${userLiked ? "blueThumbUp" : ""}`}
          />
          <p>{likesCount} Likes</p>
        </div>
        <div
          className="post__option"
          onClick={() => setShowComments(!showComments)}
        >
          <ChatBubbleOutlineIcon />
          <p>{commentsCount} Comments</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
      {showComments && <CommentSection postId={postId} />}
    </div>
  );
}

export default Post;
