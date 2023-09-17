/*
 * @Description: temp
 */

import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

function Slider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
    const data = [
        "https://westernuniversity-561298934.imgix.net/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://westernuniversity-561298934.imgix.net/pexels-photo-949670.webp?auto=compress&cs=tinysrgb&w=1600",
        "https://westernuniversity-561298934.imgix.net/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
      return (
        <div className="slider">
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
          </div>
          <div className="icons">
            <div className="icon" onClick={prevSlide}>
              <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
              <EastOutlinedIcon />
            </div>
          </div>
        </div>
      );
}



export default Slider
