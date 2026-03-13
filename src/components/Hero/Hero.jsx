import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445205170230-053b83016050"
];

const Hero = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >

      <div className="hero-content">
        <h1>New Season Collection</h1>
        <p>Discover the latest fashion trends</p>
      </div>

    </div>

  );
};

export default Hero;