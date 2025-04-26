import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cod from '../../assets/coding.gif'
import { useTranslation } from 'react-i18next';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 7000,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: false,
        variableWidth: true,
    };
    const { t, i18n } = useTranslation();
    const ChangeLng = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("i18nextLng", selectedLanguage);
    };
    const tags = [
        t("elektron tijorat"),
        t("telegram bot"),
        t("landing sahifalar"),
        t("onlayn o‘quv platformalari"),
        t("funktsional veb-saytlar")
    ];
    return (
        <div id='about' className='about max-w-[1840px] w-full h-auto container'>
            <div className="about-in1 relative bg-[#1A1A1A] rounded-[20px] p-3 mt-5 min-[420px]:p-5 sm:pt-8 2xl:pl-8">
                <span className='about-texts flex flex-col gap-2 uppercase font-semibold text-3xl text-white mb-4 xl:text-5xl 2xl:text-7xl'>
                    <h2>{t("muvaffaqiyatga olib boradigan")}</h2>
                    <span className='max-w-[360px] w-full h-[2px] bg-white xl:max-w-[480px] 2xl:max-w-[700px]'></span>
                    <h2>{t("raqamli yechimlar")}</h2>
                </span>
                <a target='_blank' href='https://t.me/xusanovvm' className='flex flex-row text-[#FF6600] gap-2 md:pt-2'>
                    <i className="fa-solid fa-circle-chevron-right text-2xl mb-4 border-2 border-[#FF6600] p-2 rounded-full xl:text-5xl"></i>
                    <p className='font-normal text-xl uppercase mt-2 xl:text-3xl'>{t("Loyihani boshlang")}</p>
                </a>
                <img
                    className='code-gif w-[280px] h-[220px] md:absolute md:right-4 md:top-4 xl:w-[340px] xl:h-[250px] 2xl:w-[500px] 2xl:h-[370px] rounded-2xl mb-5 xl:top-10 xl:right-8'
                    loading='lazy'
                    src={cod}
                    alt="coding" />
                <h3 className='text-white mb-4 2xl:text-xl md:mt-5 max-w-[770px]'>
                    {t("Biz raqamli yechimlarning o‘zgartiruvchi kuchiga ishonamiz. Mutaxassislarimiz jamoasi siz kabi bizneslarga tezkor raqamli muhitda rivojlanishda yordam berishga bag‘ishlangan.")}
                </h3>
                <div className="bottom-part bg-[#0F0F0F] p-3 ml-0 sm:max-w-[770px] sm:w-full rounded-xl text-white overflow-hidden ">
                    {isMobile ? (
                        <div className="flex flex-col gap-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="relative flex items-center px-4 uppercase">
                                    <span className="w-2 h-2 absolute top-[10px] left-5 ml-[-20px] rounded-full bg-white"></span>
                                    <p>{tag}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Slider {...settings}>
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center flex-row px-4 uppercase">
                                    <span className="w-2 h-2 absolute top-[10px] ml-[-20px] rounded-full bg-white"></span>
                                    <p>{tag}</p>
                                    <div>

                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About