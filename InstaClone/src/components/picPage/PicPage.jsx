import React, { useState, useEffect } from "react";
import "./PicPage.css";
import Navbar from "../navbar/navbar";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const truncateUsername = (username, maxLength) => {
  return username.length > maxLength
    ? `${username.slice(0, maxLength)}...`
    : username;
};

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
      <div className="top-pic">
        {images.slice(0, 8).map((image) => {
          const username = faker.internet.userName();
          const truncatedUsername = truncateUsername(username, 10);

          return (
            <div key={image.id}>
              <img
                className="topImage"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <p>
                <small>{truncatedUsername}</small>
              </p>
            </div>
          );
        })}
      </div>
      <div className="imageColumn">
        {images.map((image) => {
          const username = faker.internet.userName();
          const likes = Math.floor(Math.random() * 1000000) + 1;
          const description = faker.lorem.sentence();
          const truncatedUsername = truncateUsername(username, 15);

          return (
            <div className="pic" key={image.id}>
              <div className="user">
                <img
                  className="iconImage"
                  src={image.urls.small}
                  alt={image.alt_description}
                />
                <p>
                  <strong>{truncatedUsername}</strong>
                </p>
              </div>
              <img
                className="fixedSizeImage"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <p className="icon-bar">
                <FontAwesomeIcon
                  className="icon"
                  icon={faHeart}
                  size="2x"
                  color="#333"
                />
                <FontAwesomeIcon
                  className="icon"
                  icon={faComment}
                  size="2x"
                  color="#333"
                />
                <FontAwesomeIcon
                  className="icon"
                  icon={faPaperPlane}
                  size="2x"
                  color="#333"
                />
              </p>
              <p className="likes">{likes} likes</p>
              <p>
                <strong>{truncatedUsername}</strong> {description}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PicPage;
