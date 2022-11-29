import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return await response.json();
}

export const Post = () => {
  const [comments, setComments] = useState([]);
  const postId = useParams().id;

  useEffect(() => {
    fetchComments(postId).then(setComments);
  }, []);

  return (
    <Container className="comments">
      <div>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment__name">Name: {comment.name}</div>
            <div className="comment__email">Email: {comment.email}</div>
            <div className="comment__body">Message: {comment.body}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
