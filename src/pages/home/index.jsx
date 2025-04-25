import React from 'react'
import Service from '../service'
import Contact from '../contact'
import About from '../about'
import Works from '../works'

function Home() {
    return (
        <>
            <About />
            <Service />
            <Works />
            <Contact />
        </>
    )
}

export default Home