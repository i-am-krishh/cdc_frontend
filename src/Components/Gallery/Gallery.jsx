import React, { useRef } from "react";
import "./ImageGallery.css"; // Add the CSS file here
import cctech from './cctech.jpg';
import cctech1 from './cctech1.jpg';
import cctech2 from './cctech2.jpg';
import cctech3 from './cctech3.jpg';
import img1 from './download (1).jpeg';
import img2 from './Official-CDC-DBATU.jpg';
import img3 from './ewaste-aspect-ratio-2000-1200-1024x614.jpg';
import img4 from './Krushna Passport Photo 600x800.jpg';
import img5 from './magicstudio-art (1).jpg';

const Gallery = () => {
  const trackRef = useRef(null);

  const handleOnDown = (e) => {
    const track = trackRef.current;
    if (track) {
      track.dataset.mouseDownAt = e.clientX;
    }
  };

  const handleOnUp = () => {
    const track = trackRef.current;
    if (track) {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage || "0";
    }
  };

  const handleOnMove = (e) => {
    const track = trackRef.current;
    if (!track || track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage || "0") + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  return (
    <div
      id="image-track"
      ref={trackRef}
      data-mouse-down-at="0"
      data-prev-percentage="0"
      onMouseDown={(e) => handleOnDown(e)}
      onTouchStart={(e) => handleOnDown(e.touches[0])}
      onMouseUp={handleOnUp}
      onTouchEnd={handleOnUp}
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
    >
      <img
        className="image"
        src={cctech}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={cctech1}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={cctech2}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={cctech3}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={img1}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={img2}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={img3}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={img4}
        draggable="false"
        alt="Gallery"
      />
      <img
        className="image"
        src={img5}
        draggable="false"
        alt="Gallery"
      />
      {/* Add the rest of your images similarly */}
    </div>
  );
};

export default Gallery;
