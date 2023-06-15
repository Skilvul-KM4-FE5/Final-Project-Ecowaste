import { useContext, useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentForm">
          <Form.Control as="textarea" rows={3} placeholder="Write a comment..." value={comment} onChange={handleCommentChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentSection;
