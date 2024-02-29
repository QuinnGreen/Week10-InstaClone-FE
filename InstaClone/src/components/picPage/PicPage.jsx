import React, { useState, useEffect } from "react";
import "./PicPage.css";
import Navbar from "../navbar/navbar";
import { faker } from "@faker-js/faker";

const PicPage = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // If images are loaded, do not reload
        if (imagesLoaded) {
          return;
        }

        const accessKey = "sa5okAdXfBsxSJwzaq6rmQsgXYtctLcAoNmkAKdskYE";
        const response = await fetch(
          `https://api.unsplash.com/photos/?page=1&client_id=${accessKey}`
        );

        if (!response.ok) {
          throw new Error("Error fetching images from Unsplash");
        }

        const data = await response.json();
        setImages(data);
        setImagesLoaded(true); // images marked loaded
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imagesLoaded]); // Add imagesLoaded to the dependencies array

  return (
    <div className="unsplashGallery">
      <Navbar />
      <h1>Unsplash Gallery</h1>
      <div className="imageColumn">
        {images.map((image) => {
          const username = faker.internet.userName();
          const likes = Math.floor(Math.random() * 1000000) + 1;
          const description = faker.lorem.sentence();
          return (
            <div className="pic" key={image.id}>
              <p>{username}</p>
              <img
                className="fixedSizeImage"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <p> icons</p>
              <p>{likes} likes</p>
              <p>
                <strong>{username}</strong> {description}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PicPage;