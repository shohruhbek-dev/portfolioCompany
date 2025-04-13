import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const tags = [
    "e-commerce",
    "telegram bot",
    "landing pages",
    "online learning platforms",
    "functional websites"
];

const About = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: false,
        variableWidth: true,
    };

    return (
        <div className='about max-w-[1840px] w-full h-auto container'>
            <div className="about-in bg-[#1A1A1A] rounded-[20px] p-5 mt-5">
                <span className='about-texts flex flex-col gap-0 uppercase font-semibold text-[78px] text-white mb-12'>
                    <h2>
                        digital solutions
                    </h2>
                    <h2>
                        that drive success
                    </h2>
                </span>
                <h3 className='text-white'>We believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</h3>
                <div className="bottom-part bg-[#0F0F0F] p-3 ml-0 mr-32 rounded-xl text-white overflow-hidden">
                    <Slider {...settings}>
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center flex-row gap-4 px-4"
                            >
                                {index !== tags.length + 1 && (
                                    <span className="w-2 h-2 absolute top-[10px] ml-[-20px] rounded-full bg-white"></span>
                                )}
                                <p>{tag}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default About