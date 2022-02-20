import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PostCarousel.css"

export default function PostCarousel({ images }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
    };
    return (
        <div className="post-carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="carousel" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
