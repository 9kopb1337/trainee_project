import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

async function fetchAlbums(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  return await response.json();
}

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetchAlbums(1).then(setAlbums);
  }, []);

  return (
    <Container className="albums">
      <div>
        {albums.map((album, index) => (
          <div className="album" key={index}>
            <div className="card-body">
              <p className="card-text">
                {album.id}. {album.title}
              </p>
            </div>
            <Nav activeKey="/">
              <Nav.Item>
                <Nav.Link as={Link} to={`/albums/${album.id}`}>
                  Press{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        ))}
      </div>
    </Container>
  );
};
