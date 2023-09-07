import React from 'react'
import movies from "../data/comedies/comedies.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./comedies.scss"
export default  function Swiper ()  {
  return (
 
    <div className='movie-list-container'>
         <h2 className='title'>Comedy Movies </h2>
        
        <div className='movies'>
                    <section id="section-5">
                        <a className='Previous' href="#section-6"><ChevronLeftIcon/></a>
                    
                {movies.slice(0, 5).map((movie, index) => (
               <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
               <a  className='Next' href="#section-6"><ChevronRightIcon/></a>
            </section>
            <section id="section-6">
            <a  className='Previous' href="#section-5"><ChevronLeftIcon/></a>

            {movies.slice(5, movies.length).map((movie, index) => (
 <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
                <a  className='Next' href="#section-5"><ChevronRightIcon/></a>
            </section>

            
        </div>
    

    </div>
  )
}

