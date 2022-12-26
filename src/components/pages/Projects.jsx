import React from 'react'
import data from '../../data'
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {

  console.log()
  return ( <>
    <h1 className='headline'>Projects</h1>
    <main className='projectsContainer'>
          {data.projects.map((item, index) => (
             <div className='projectItem' key={index} id={index}>
             <a href={item.link} rel="noopener" target="_blank" >
                <img src={item.image} alt={item.name} className='projectImg'  />
               
                <h2>{item.name}</h2>
                <p className='description'>{item.description}</p>
                </a>
              <a href={item.codeLink} className="show" rel="noreferrer"  target="_blank"><GitHubIcon color='action' fontSize='large' /></a> <span className='hide'>Code .</span> 
             </div>
            
          )

          )}

        
    </main>
    </>
  )
}

export default Projects