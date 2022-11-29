import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserId } from "../../slices/users";

async function fetchAlbums(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  return await response.json();
}

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    fetchAlbums(userId).then(setAlbums);
  }, [userId]);

  return (
    <Container className="albums">
      <div>
        {albums.length
          ? albums.map((album) => (
              <div className="album" key={album.id}>
                <div className="card-body">
                  <p className="card-text">
                    {album.id}. {album.title} <Link to={`/albums/${album.id}`}>→</Link>
                  </p>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </Container>
  );
};
