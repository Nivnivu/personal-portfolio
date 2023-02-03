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
import personalImg from '../../photos/myIMG.jpg'

function About() {

  return (
    <>
    <h1 className='headline'>About</h1>
    <main className='flexAbout'>
      <div className='flexAboutInfo'>
      <img src={personalImg} alt="" className='aboutPersonalmg' />
        <p>
        I'm Niv, 27 years old, a javascript progarmer.
         <br />
        Iv'e started my journey learning python as a first programing language. <br />
        On my way to become python developer i discoverd Web Development, <br />
        and the connection was instantly. <br />
        Since then, i'm larning new technologies and i am doing self-projects. <br />
        I took several courses realated to Full-Stack. <br />
        Some of my certificates can be viewed in the related section. <br />
        Now days I'm Using React/React-Native as a Front-End template. <br />
        And Node.js and express as runtime enviorment for servers. <br />
        I'm comfotrable with these technologies :
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