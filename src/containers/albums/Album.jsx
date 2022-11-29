import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

async function fetchPhotos(albumId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return await response.json();
}

export const Album = () => {
  const [photos, setPhotos] = useState([]);
  const albumId = useParams().id;

  useEffect(() => {
    fetchPhotos(albumId).then(setPhotos);
  }, []);

  return (
    <Container className="album">
      <Carousel>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img src={photo.url.replace("/600/", "/1300x600/")} alt={photo.title} className="photo" />
            <Carousel.Caption>
              <h3>{photo.title}</h3>
              <p>{`${photo.albumId} - ${photo.id} - ${photo.thumbnailUrl}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
