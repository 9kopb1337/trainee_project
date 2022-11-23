import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return await response.json();
}

export const Post = () => {
  const params = useParams();
  const postId = params.id;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(postId).then(setComments);
  }, []);

  return (
    <Container className="posts">
      <div>
        {comments.map((comment, index) => (
          <div className="post" key={index}>
            <div className="post__name">
              Name: {comment.name}
              <div className="post__email">
                Email: {comment.email}
                <div className="post__body">Message: {comment.body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
