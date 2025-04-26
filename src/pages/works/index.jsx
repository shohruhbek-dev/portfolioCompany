import React from 'react'
import fstudy from '../../assets/f-study.avif'
import founders from '../../assets/founders.avif'
import visapro from '../../assets/visapro.avif'
import giftmaster from '../../assets/giftmaster.avif'

const works = [
  {
    img: fstudy,
    link: "futurestudy.uz",
    title: "Future Study Konsulting firmasi"
  },
  {
    img: founders,
    link: "foundersenglishschool.uz",
    title: "Founders School o'quv markazi"
  },
  {
    img: visapro,
    link: "visapro.uz",
    title: "Visa Pro turfirmasi"
  },
  {
    img: giftmaster,
    link: "giftmaster.uz",
    title: "Gift Master"
  }
]

const Works = () => {
  return (
    <div id='works' className='works container max-w-[1920px] w-full'>
      <div className="mb-8 w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl">
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#F9EFEC]'>Oxirgi qilgan ishlarimiz</h1>
      </div>
      <div className="projects w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl gap-3">
        {
          works.map((work, index) => {
            return (
              <a
                href={`https://${work.link}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}>
                <div className='card max-w-[250px] w-full h-auto m-2 sm:m-4 lg:m-5 border-b-2 border-gray-500 pb-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300 ease-in-out'>
                  <p className="title text-center text-[#F9EFEC] font-medium text-xl mt-2">{work.title}</p>
                  <img src={work.img} alt="projects image" className='w-full h-full object-cover' />
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