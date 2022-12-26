import React from 'react'
import facebook from '../../photos/facebook.png'
import email from '../../photos/email.png'
import LinkedIn from '../../photos/linkedin.png'

function Contact() {
  return (
    <>
    <h1 className='headline'>Contact</h1>
    <main className='flexAbout'>
      <div className='flexAboutInfo'>
        <p>
          <h3>You can contact me via:</h3>
          <a href="https://www.facebook.com/niv.barsheshet/" target="_blank" rel="noreferrer">
          <h4>Facebook: <img src={facebook} className='footerIcon' alt="Facebook Link" /></h4> 
          </a>
          <a href="mailto:nivbarsh@gmail.com" target="_blank" rel="noreferrer">
          <h4>Email: <img src={email} className='footerIcon' alt="Email Link" /></h4> 
          </a>
          <a href="https://www.facebook.com/niv.barsheshet/" target="_blank" rel="noreferrer">
          <h4>Facebook: <img src={LinkedIn} className='footerIcon' alt="Linkedin Link" /></h4> 
          </a>

        </p>

        </div>
    </main>
    </>
  )
}

export default Contact