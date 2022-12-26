import React from 'react'
import  gitIcon  from '../../photos/github.png'
import  htmlIcon  from '../../photos/html.png'
import  cssIcon  from '../../photos/css.png'
import  ejsIcon  from '../../photos/ejs.png'
import  reactIcon  from '../../photos/atom.png'
import nodeIcon from '../../photos/nodejs.png'
import mongo from '../../photos/mongo.png'
import sql from '../../photos/sql.png'
import python from '../../photos/python.png'


function About() {

  const personalImg = 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t31.18172-8/23826310_10215398393816799_5236957988117287752_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=UpcnKb9JAO0AX_xjAyb&_nc_ht=scontent.fsdv1-2.fna&oh=00_AfAbt3uguKgbdNcxKKKieHEXHSvLdrpuahPYjtEmnQJWUg&oe=63D114AF'

  return (
    <>
    <h1 className='headline'>About</h1>
    <main className='flexAbout'>
      <div className='flexAboutInfo'>
      <img src={personalImg} alt="" className='aboutPersonalmg' />
        <p>
        I'm Niv 27 years old, javascript progarmer.
         <br />
        Iv'e started my journey learning python as a first programing language. <br />
        On my way to become python developer i discoverd Web Development. <br />
        And the connection was instantly. <br />
        Ever since i'm larning new tech and doing self-projects. <br />
        I took several courses realated to Full-Stuck. <br />
        Whice you can view the certificates in the realated section. <br />
        Now days I'm Using React/React-Native as a Front-End template. <br />
        And Node.js and express as runtime enviorment for servers. <br />
        comftrable with : 
        </p>
        <img className='aboutIcons' src={gitIcon} alt="git icon" />
        <img className='aboutIcons' src={htmlIcon} alt="html5 icon" />
        <img className='aboutIcons' src={cssIcon} alt="css3 icon" />
        <img className='aboutIcons moveup' src={ejsIcon} alt="ejs icon" />
        <img className='aboutIcons' src={reactIcon} alt="react icon" />
        <img className='aboutIcons' src={nodeIcon} alt="nodejs icon" />
        <img className='aboutIcons' src={mongo} alt="mongodb icon" />
        <img className='aboutIcons' src={sql} alt="sql icon" />
        <img className='aboutIcons' src={python} alt="python icon" />
        </div>
    </main>
    </>
  )
}

export default About