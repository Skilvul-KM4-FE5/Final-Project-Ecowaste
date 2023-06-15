import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CommentSection = () => {
  const param = useParams();

  const { currentUser } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      return;
    }
    const newComment = {
      createdAt: new Date(),
      username: currentUser.username,
      content: comment,
    };
    setCommentsList([...commentsList, newComment]);
    setComment("");
    const response = await fetch(`${url}/${param.newsId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    await response.json();
    loadComments();
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div>
      <h4>Comments</h4>
    </div>
  );
};

export default CommentSection;
