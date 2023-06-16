import { useContext, useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { formatTime } from "../utils/formatTime";

const url = "https://644e26454e86e9a4d8f1fcf6.mockapi.io/api/v1/berita";
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

  const loadComments = async () => {
    const response = await fetch(`${url}/${param.newsId}/comment`);
    const data = await response.json();
    setCommentsList(data);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div>
      <h4>Comments</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentForm">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "1.5rem" }}>
          Submit
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {commentsList.map((comment, index) => (
          <ListGroup.Item
            key={index}
            style={{
              marginTop: "1.5rem",
              opacity: comment.id ? "100%" : "50%",
            }}
          >
            <strong>{comment.username}: </strong>
            {comment.content}
            <br />
            {formatTime(comment.createdAt)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentSection;
