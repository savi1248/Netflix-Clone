import React from 'react'
import movies from "../data/documentries/documentries.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default  function Swiper ()  {
  return (
 
    <div className='movie-list-container'>
         <h2 className='title'>Documentries </h2>
        
        <div className='movies'>
                    <section id="section-9">
                        <a className='Previous' href="#section-10"><ChevronLeftIcon/></a>
                    
                {movies.slice(0, 5).map((movie, index) => (
               <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
               <a  className='Next' href="#section-10"><ChevronRightIcon/></a>
            </section>
            <section id="section-10">
            <a  className='Previous' href="#section-9"><ChevronLeftIcon/></a>

            {movies.slice(5, movies.length).map((movie, index) => (
 <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
                <a  className='Next' href="#section-9"><ChevronRightIcon/></a>
            </section>

            
        </div>
    

    </div>
  )
}

