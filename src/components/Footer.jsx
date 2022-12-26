import React from 'react'
import gitIcon from '../photos/git.png'
import facebook from '../photos/facebook.png'
import linkdin from '../photos/linkedin.png'


function Footer() {

  const personalImg = 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t31.18172-8/23826310_10215398393816799_5236957988117287752_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=UpcnKb9JAO0AX_xjAyb&_nc_ht=scontent.fsdv1-2.fna&oh=00_AfAbt3uguKgbdNcxKKKieHEXHSvLdrpuahPYjtEmnQJWUg&oe=63D114AF'

  return (
    <footer>
      <div className='footerChild'>
        <img src={personalImg} alt="My self" className='personalImg'  />
       <span className='footerTxt'>Niv Barchechet 27, Web developer.</span>  
        </div>

        <div>
      <a href='https://www.facebook.com/niv.barsheshet/' target="_blank" rel="noreferrer" > <img src={facebook} alt="facebook icon" className='footerIcon' /></a>
      <a href='https://www.linkedin.com/in/%D7%A0%D7%99%D7%91-%D7%91%D7%A8%D7%A9%D7%A9%D7%AA-490aa4240/' target="_blank" rel="noreferrer" > <img src={linkdin} className='footerIcon' alt="Linkdein icon" /> </a>
      <a href='https://github.com/Nivnivu' target="_blank" rel="noreferrer" > <img className='footerIcon' src={gitIcon} alt="github icon" /> </a>
      </div>
    </footer>
  )
}

export default Footer