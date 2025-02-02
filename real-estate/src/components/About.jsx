import React from 'react'
import abt from '/src/data/about.js'
const About = () => {
            const aboutt=abt.map((current,index)=>{
                return (
                    <div className='cont'>
                         <img className="project-image cadre " id={index} src={current.url} />
                         <h3 className='serviceTitle'>{ current.nom}</h3>
                         <p className='serviceDescription' style={{textAlign:"center"}}>{current.description}</p>
                    </div>
        
            )})
        
  return (
    <section className="Services " style={{backgroundColor:"white" }}>
      
    <div className='inner1'>
        <h3 className='inner1title'>What Make Us Different?</h3>
        <p>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
    </div>
    <div className='inner2'>
        {aboutt}
    </div>
</section>
  )
}

export default About