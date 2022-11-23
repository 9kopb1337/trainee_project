import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "bootstrap";

async function fetchAlbum(albumId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return await response.json();
}

export const Album = () => {
  const params = useParams();
  const albumId = params.id;
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    fetchAlbum(albumId).then(setAlbum);
  }, []);

  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [previousPhoto, setPreviousPhoto] = useState(null);
  const [nextPhoto, setNextPhoto] = useState(null);

  return (
    <div className="album">
      <div>
        {album.map((album, index) => (
          <div className="album" key={index}>
            <img src={`${album.thumbnailUrl}`} className="img-fluid" alt="Responsive image" />
            <div>
              <img src={`${album.url}`} className="img-fluid" alt="Responsive image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
