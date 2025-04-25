import React from 'react'
import fstudy from '../../assets/f-study.avif'
import founders from '../../assets/founders.avif'
import visapro from '../../assets/visapro.avif'
import Card from './card'

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
  }
]

const Works = () => {
  return (
    <div id='works' className='works container max-w-[1920px] w-full'>
      <div className="mb-8 w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl">
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#F9EFEC]'>Oxirgi qilgan ishlarimiz</h1>
        <div className="projects">
          {
            works.map((work, index) => {
              <Card key={work} index={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Works