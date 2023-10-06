import React, { useEffect, useState } from "react";
import db from "./firebase";
import { Avatar } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
import "./CommentSection.css";

function CommentSection({ postId }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  // Fetch comments associated with postId using Firebase or other data source
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsRef = db
          .collection("comments")
          .where("postId", "==", postId);
        const snapshot = await commentsRef.get();
        const commentsData = snapshot.docs.map((doc) => doc.data());
        console.log("Fetched comments:", commentsData);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);
  const handleCommentSubmit = async () => {
    // Ensure that the comment is not empty
    if (newComment.trim() === "") {
      return;
    }

    try {
      // Add the comment to the "comments" collection
      const commentRef = await db.collection("comments").add({
        commentText: newComment,
        timestamp: serverTimestamp(),
        profilePic:
          user.photoURL ||
          "https://cdn0.iconfinder.com/data/icons/online-shop-equitment-gliph/32/line-2_on_going_logo-02-512.png",
        username: user.displayName || "Guest",
        postId: postId, // Associate the comment with the postId
      });

      // Clear the input field
      setNewComment("");
      const commentsRef = db
        .collection("comments")
        .where("postId", "==", postId);
      const snapshot = await commentsRef.get();
      const commentsData = snapshot.docs.map((doc) => doc.data());
      setComments(commentsData);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="comment-section">
      {comments.map((comment) => (
        <div key={comment.id} className="commentDiv">
          <Avatar className="profilePic" src={comment.profilePic} />
          <div className="commentText">
            <p className="commenterName">{comment.username}</p>
            <p>{comment.commentText}</p>
          </div>
        </div>
      ))}

      <div className="comment-form">
        <input
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleCommentSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}

export default CommentSection;
