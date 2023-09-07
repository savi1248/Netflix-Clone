import React from 'react'
import "./tvshows.scss"
import tvshows from "../data/tvshows/tvshows.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default  function Swiper ()  {
  return (
 
    <div className='tvshow-list-container'>
         <h2 className='title'>TV shows</h2>
        
        <div className='tvshows'>
                    <section id="section-3">
                        <a className='Previous' href="#section-4"><ChevronLeftIcon/></a>
                    
                {tvshows.slice(0, 5).map((tvshow, index) => (
               <div className='tvshow' style={{backgroundImage:`url(${tvshow.image_src})`}}> </div>
               ))}
               <a  className='Next' href="#section-4"><ChevronRightIcon/></a>
            </section>
            <section id="section-4">
            <a  className='Previous' href="#section-3"><ChevronLeftIcon/></a>

            {tvshows.slice(5, tvshows.length).map((tvshow, index) => (
 <div className='tvshow' style={{backgroundImage:`url(${tvshow.image_src})`}}> </div>
               ))}
                <a  className='Next' href="#section-3"><ChevronRightIcon/></a>
            </section>

            
        </div>
    

    </div>
  )
}

