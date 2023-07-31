import React from 'react'
import "../styles/contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form action="">
                 <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" required placeholder='Name here'/>

                 </div>
                 <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" required placeholder="abc@gmail.com"/>
                 </div>
                 <div>
                    <label htmlFor="">Message</label>
                    <input type="text" name="" id="" required placeholder="leave a question..."/>
                 </div>

                 <button type='submit'>send</button>
            </form>
        </main>

    </div>
  )
}

export default Contact