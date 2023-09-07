import React from 'react'

import movies from "../data/animation/animation.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default  function Swiper ()  {
  return (
 
    <div className='movie-list-container'>
         <h2 className='title'>Animation</h2>
        
        <div className='movies'>
                    <section id="section-7">
                        <a className='Previous' href="#section-8"><ChevronLeftIcon/></a>
                    
                {movies.slice(0, 5).map((movie, index) => (
               <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
               <a  className='Next' href="#section-8"><ChevronRightIcon/></a>
            </section>
            <section id="section-8">
            <a  className='Previous' href="#section-7"><ChevronLeftIcon/></a>

            {movies.slice(5, movies.length).map((movie, index) => (
 <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
                <a  className='Next' href="#section-1"><ChevronRightIcon/></a>
            </section>

            
        </div>
    

    </div>
  )
}

