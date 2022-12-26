import React from 'react'
import data from '../../data'

function Certificets() {
  return (
    <>
    <h1 className='headline'>Certificets</h1>
    <main className='projectsContainer'>
          {data.certificets.map((item, index) => (
             <div className='certItem' key={index} id={index}>
             <a href={item.link} target="_blank" rel="noopener">
                <img src={item.image} alt={item.name} className='certImg' />
               
                <h2>Click to verify</h2>
                </a>
     
             </div>
            
          )

          )}

        
    </main>
    </>
  )
}

export default Certificets