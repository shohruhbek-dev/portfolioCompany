import React from 'react'
import fstudy from '../../assets/f-study.avif'
import founders from '../../assets/founders.avif'
import visapro from '../../assets/visapro.avif'
import giftmaster from '../../assets/giftmaster.avif'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

const works = [
  {
    img: fstudy,
    link: "futurestudy.uz",
    title: "Future Study"
  },
  {
    img: founders,
    link: "foundersenglishschool.uz",
    title: "Founders School"
  },
  {
    img: visapro,
    link: "visapro.uz",
    title: "Visa Pro"
  },
  {
    img: giftmaster,
    link: "giftmaster.uz",
    title: "Gift Master"
  }
]

const Works = () => {
  const { t, i18n } = useTranslation();
  const ChangeLng = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <div id='works' className='works container max-w-[1920px]'>
      <div className="mb-8 w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl">
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#F9EFEC]'>{t('Oxirgi qilgan ishlarimiz')}</h1>
      </div>
      <div className="projects w-full bg-[#1A1A1A] p-2 rounded-2xl flex flex-col items-center justify-center gap-3 min-[600px]:grid min-[600px]:grid-cols-2 min-[1650px]:grid-cols-4">
        {
          works.map((work, index) => {
            return (
              <a
                className='flex items-center justify-center flex-col'
                href={`https://${work.link}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}>
                <div className={`card fade-up max-w-[250px] w-full lg:max-w-[350px] h-auto m-2 min-[820px]:ml-8 border-b-2 border-gray-500 pb-5 flex flex-col items-center justify-center gap-3 ${index === 2 || index === 3 ? 'min-[1650px]:pt-9' : ''}`}>
                  <p className="title text-center text-[#F9EFEC] font-medium text-xl md:text-2xl lg:text-3xl mt-2">{work.title}</p>
                  <img src={work.img} alt="projects image" className='w-full h-[210px] lg:h-[280px] object-cover' />
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Works