import React from 'react'
import srv from '/src/data/services.js'
const Services = () => {
        const service=srv.map((current,index)=>{
            return (
                <div>
                     <img className="project-image" id={index} src={current.url} />
                     <h3 className='serviceTitle'>{ current.nom}</h3>
                     <p className='serviceDescription'>{current.description}</p>
                </div>
    
        )})
    
    
  return (
    <section className="Services">
      
            <div className='inner1'>
                <h3 className='inner1title'>Our Excellent Services</h3>
                <p>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
            </div>
            <div className='inner2'>
                {service}
            </div>

        


    </section>
  )
}

export default Services