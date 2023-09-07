import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss";
const Featured = () => {
  return (
    <div className='featured'>
     
           <img className=''
         width="100%"
       src='https://wallpaperaccess.com/full/1087433.jpg' alt=""
        />  
  <div className='info'>
     <header>
      <img src="https://occ-0-2484-3646.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYO7qfxROfC2zXPyp6FeMWAmk4j4JeAJDJA23UdvSeJ2-fJYDbHwWdE24Vrgp_JFtFNzwbnCvsgBxtwlS_4F1XdTTDaXLS-BZXTXJrS80YAFSZ263hbDqFhOaRYeO8TW0g4HpLQIhTQiJ_mQXxZpYt6H5eMYdA7SFABRAlwm85DjDCXEmk-VLQ.png?r=23b" 
      alt="" />
     {/* <h2 className=' '>Stranger Things</h2> */}
     <br /> <br /> <br /> <br />
     <h2 style={{color:"white"}}>Stranger Things</h2>
     <div className='title-info-metadata-wrapper'>
      <span className='title-info-metadata-item'>
2016
      </span>
      <span className='info-spacer'>
        |
      </span>
      <span className='maturity-number '>
   U/A 16+
      </span>
      <span className='info-spacer'>
        |
      </span>
      <span className='title-info-metadata-item'>
5 Seasons
      </span>
      <span className='info-spacer'>
        |
      </span>
      <span className='title-info-metadata-item'>
Horror
      </span>


     </div>
     </header>
             <br />
           <span className="desc">
           When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </span>
        <div>  
            <span className='title-data-info-item-label'>
 Starring:
  </span>
  <span className='cont'>Winona Ryder,David Harbour,Millie Bobby Brown</span>
           </div> 
           
            <div>  
            <span className='title-data-info-item-label'>
            Creators:
  </span>
  <span className='cont'>The Duffer Brothers
</span>
           </div>
           <br />
        <div className='buttons'>
            <button className='play'>
            <PlayArrowIcon />
            <span>Play</span>
            </button>
            <button className='more'>
            <InfoOutlinedIcon />
            <span>More Info</span>
            </button>
            </div>
            
           </div>
    </div>
    
  )
}

export default Featured