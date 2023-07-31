import React from 'react'
import "../styles/home.scss"
import vg from "../assets/developerSVG.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,AiFillFacebook} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        
        <main>
            <h1>ECHOxTOP.</h1>
            <p>Make your jurney better.</p>
        </main>
    </div>

   <div className="home2">
     <img src={vg} alt="Graphics" />
      <div>
        <p>
            we are one of the best solution for yoer daily hassel,
            we are leading tech company whose aim to be the best increse 
            potential and problemsolving in version
        </p>
      </div>
   </div>

   <div className="home3" id='about'>
    <div>
        <h1>Who we are?</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi autem ullam facere velit qui ad. Facere cumque asperiores blanditiis, amet quo labore, obcaecati id doloremque, est corrupti magnam neque?
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iure, ut quidem cupiditate quasi, obcaecati rem asperiores alias dolor sed pariatur accusantium cumque fugiat ipsa ab! Optio aut sit ab?
        </p>
    </div>
   </div>
  <div className="home4" id='brands'>
    <div className='brands'>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s"
            }}>
          <AiFillGoogleCircle />
          <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
          <AiFillFacebook />
          <p>FaceBook</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
          <AiFillYoutube/>
          <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"0.9s"
            }}>
          <AiFillInstagram />
          <p>Instagram</p>
            </div>
            <div style={{
                animationDelay:"1.1s"
            }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
            </div>
        </article>
    </div>
  </div>
   </>
  )
}

export default Home