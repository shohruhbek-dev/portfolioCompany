import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Layout(props) {
    const { children } = props
    return (
        <div className='container max-w-[1920px] m-auto p-[20px] sm:p-[40px]'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout