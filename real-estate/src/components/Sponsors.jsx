import React from 'react'
import sponsor from '/src/data/sponsors.js'
const Sponsors = () => {


    const experience=sponsor.map((current,index)=>{
        return (
                 <img className="project-image" id={index} src={current.url} />

    )})

  return (
    <section className="sponsors">
        <div> {experience} </div>
        
    </section>
  )
}

export default Sponsors