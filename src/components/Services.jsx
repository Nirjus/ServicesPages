import React from 'react'
import "../styles/services.scss"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/developerSVG1.avif"
import img2 from "../assets/developerSVG2.avif"
import img3 from "../assets/developerSVG3.avif"
import img4 from "../assets/developerSVG8.jpg"
import img5 from "../assets/developerSVG5.png"
import img6 from "../assets/developerSVG6.jpg"
import img7 from "../assets/developerSVG7.avif"
import { AiFillAlipaySquare, AiFillCheckCircle, AiFillControl, AiFillInteraction } from 'react-icons/ai'
const Services = () => {
  return (
    <div className='services'>
        <Carousel
        className='carosol'
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={2000}
        showThumbs={false}
        showArrows={false}
        >   
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full stack</p>
            </div>
            <div>
                <img src={img2} alt="Item1" />
                <p className='legend'>MERN stack</p>
            </div>  
            <div>
                <img src={img3} alt="Item1" />
                <p className='legend'>Ful stack</p>
            </div>  
            <div>
                <img src={img4} alt="Item1" />
                <p className='legend'>MERN stack</p>
            </div>  
            <div>
                <img src={img5} alt="Item1" />
                <p className='legend'>Full stack</p>
            </div>  
            <div>
                <img src={img6} alt="Item1" />
                <p className='legend'>MERN stack</p>
            </div>  
            <div>
                <img src={img7} alt="Item1" />
                <p className='legend'>Full stack</p>
            </div>  
        </Carousel>
        <div className='plans'>
            <h1>Plans</h1>
          
          <div>
          <AiFillControl className='icons'/>
          <p>Controls</p>
          </div>
        <div>
           <AiFillAlipaySquare className='icons' />
           <p>ALiPlay</p>
              </div>
        <div>
         <AiFillCheckCircle className='icons'/>
         <p>Check Test</p>
        </div>
        <div>
           <AiFillInteraction className='icons'/>
           <p>Interactive</p>
        </div>
          </div>

    </div>
  )
}

export default Services