import React from 'react'

const Hero = () => {
  return (
    <section className="Hero">
  
      <h1>We Provide Architectural design and Construction</h1>
        <p>More than 100 building and housing projects that we have built. The building owner chose us over other contractors in Jakarta,because our work is different</p>
        <button>Discover More</button>
       <ul>
            <li>
                <p className='item'>300
                    <span>+</span>
                    </p>
                    <p className='description' >Happy Client</p>

                    </li>
                    <li>
                <p className='item' >900
                    <span>+</span>
                    </p>
                    <p className='description' >Amazing Projects</p>
                    </li>
                    <li>
                <p className='item' >20
                    <span>+</span>
                    </p>
                    <p className='description'>Awards Winning</p>
                    </li>
            
       </ul>
      
    
    </section>  
  )
}

export default Hero