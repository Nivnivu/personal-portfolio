import React, {useEffect, useState} from 'react'
import data from '../../data'
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {

  const [showMore, setShowMore] = useState(false);
  const [reactData, setReactData] = useState([]);
  const [javascriptData, setJavascriptData] = useState([]);
  const [icpData, setIcpData] = useState([]);
  const [mernData, setMernData] = useState([]);

  const mainpulateData = async () => {
    try {
      if (showMore){
        setReactData(data.react)
        setJavascriptData(data.javascript)
        setIcpData(data.bloackchain)
        setMernData(data.mern)
      } else {
        const res = data
        setReactData(res.react.slice(0, 3));
        setJavascriptData(res.javascript.slice(0,3))
        setIcpData(data.bloackchain)
        setMernData(data.mern)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    mainpulateData()
  }, [showMore])

  const buttonDisplay = () => {
    if (showMore) {
      return <button onClick={() => {setShowMore(showMore ? false : true)}}>Show less <br /> ▼</button>
    } else {
      return <button onClick={() => {setShowMore(showMore ? false : true)}}>Show more <br /> ▼</button>
    }
  }

  console.log(icpData)
  
  return ( <main>
   <h1 className='headline'>Projects</h1>
    <h2 className='headline2'>MERN-stack</h2>
    <section className='projectsContainer'>
          {mernData.map((item, index) => (
             <div className='projectItem' key={index} id={index}>
             <a href={item.link} rel="noopener" target="_blank" >
                <img src={item.image} alt={item.name} className='projectImg'  />
               
                <h3>{item.name}</h3>
                <p className='description'>{item.description}</p>
                </a>
                <p>No shared code.</p>
             </div>
            
          )

          )}

    </section>
    <h2 className='headline2'>React</h2>
    <section className='projectsContainer'>
          {reactData.map((item, index) => (
             <div className='projectItem' key={index} id={index}>
             <a href={item.link} rel="noopener" target="_blank" >
                <img src={item.image} alt={item.name} className='projectImg'  />
               
                <h3>{item.name}</h3>
                <p className='description'>{item.description}</p>
                </a>
              <a href={item.codeLink} className="show" rel="noreferrer"  target="_blank"><GitHubIcon color='action' fontSize='large' /></a> <span className='hide'>Code .</span> 
             </div>
            
          )

          )}

    </section>
    {buttonDisplay()}
    <h2 className='headline2'>Javascript</h2>
    <section className='projectsContainer'>
    {javascriptData.map((item, index) => (
             <div className='projectItem' key={index} id={index}>
             <a href={item.link} rel="noopener" target="_blank" >
                <img src={item.image} alt={item.name} className='projectImg'  />
               
                <h3>{item.name}</h3>
                <p className='description'>{item.description}</p>
                </a>
              <a href={item.codeLink} className="show" rel="noreferrer"  target="_blank"><GitHubIcon color='action' fontSize='large' /></a> <span className='hide'>Code .</span> 
             </div>
            
          )

          )}
    </section>
    <h2 className='headline2'>ICP Blockchain</h2>
    <section className='projectsContainer'>
    {icpData.map((item, index) => (
             <div className='projectItem' key={index} id={index}>
           
                <img src={item.image} alt={item.name} className='projectImg'  />
               
                <h3>{item.name}</h3>
                <p className='description'>{item.description}</p>
                
              <a href={item.codeLink} className="show" rel="noreferrer"  target="_blank"><GitHubIcon color='action' fontSize='large' /></a> <span className='hide'>Code Only, due to Blockchain costs.</span> 
             </div>
            
          )

          )}
    </section>

    </main>
    
  )
}

export default Projects