import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

async function fetchPost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}/posts`);
  return await response.json();
}

export const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetchPost(1).then(setPost);
  }, []);

  return (
    <Container className="posts">
      <div>
        {posts.map((post, index) => (
          <div className="post" key={index}>
            {post.id}. {post.title}. {post.body}
            <Nav activeKey="/">
              <Nav.Item>
                <Nav.Link as={Link} to={`/posts/${post.id}`}>
                  Press
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        ))}
      </div>
    </Container>
  );
};
