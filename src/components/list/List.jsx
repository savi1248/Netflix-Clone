 import React, { useRef, useState } from 'react'
// import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listitem/ListItem';


import './list.scss'

const List = () => {
 const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const slidersRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
      
      let distance = slidersRef.current.getBoundingClientReact().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        slidersRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        slidersRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
        <div className='list'>
            <span className='listTitle'>Netflix Originals</span>
            <div className='wrapper'>
                {/* < ArrowBackIosOutlinedIcon className='sliderArrow left'
                 onClick={() => handleClick("left")} 
                 style={{ display: !isMoved && "none" }}

                 /> */}

                <div className='container'>
                < ListItem />
                
               
                
                
                

                </div>
                {/* < ArrowForwardIosOutlinedIcon className='sliderArrow right'
                 onClick={() => handleClick("right")} /> */}
            </div>
        </div>
    )
}

export default List