import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserId } from "../../slices/users";

async function fetchPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  return await response.json();
}

export const Posts = () => {
  const userId = useSelector(selectUserId);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(userId).then(setPosts);
  }, [userId]);

  return (
    <Container className="posts">
      <div>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>
              {post.body}... <Link to={`/posts/${post.id}`}>Comments</Link>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
