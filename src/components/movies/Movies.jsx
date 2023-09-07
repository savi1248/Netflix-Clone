import React from 'react'
import Row from 'react-bootstrap/Row';
import "./movies.scss"



const ListItem = () => {
  return (
    <div className='list'>
        <span className='listTitle '>Horror Movies</span>
        
    <div className="listitem">
    <div className='container'>
    
    <Row>
       
    
    <img
      src="https://i.pinimg.com/originals/0f/5a/af/0f5aafc44adca54ca6197408312cdc4e.jpg"
      alt="" className="img"
    />
    
   
     <img
      src="https://hips.hearstapps.com/hmg-prod/images/best-horror-movies-netflix-blood-red-sky-64399c7c60e2c.jpg?crop=1xw:1xh;center,top&resize=980:*"
      alt="" className="img"
    />
    
   
     <img style={{width:"10rem"}}
      src="https://hips.hearstapps.com/hmg-prod/images/mv5bzgqzodvkzdatowfhns00mwjhlthjndctnjflzdexyjg5nwm1xkeyxkfqcgdeqxvymteymjm2ndc2-v1-64a72bf2baf47.jpg?crop=1xw:1xh;center,top&resize=980:*"
      alt="" className="img"
      
    />
    
    <img src="https://hips.hearstapps.com/hmg-prod/images/best-horror-movies-on-netflix-cargo-64514aaab999b.jpg?crop=1xw:1xh;center,top&resize=980:*"
     alt="" className='img' />
    <img
      src="https://hips.hearstapps.com/hmg-prod/images/best-horror-movies-netflix-bird-box-6439c164c7d93.jpeg?crop=1xw:1xh;center,top&resize=980:*"
      alt="" className="img"
    />
    <img
     src='https://hips.hearstapps.com/hmg-prod/images/best-horror-movies-netflix-47-meters-down-uncaged-64399d662d742.jpeg?crop=1xw:1xh;center,top&resize=980:*'
      alt="" className="img"
    />
    <img src="https://hips.hearstapps.com/hmg-prod/images/best-horror-movies-onnetflix-right-now-the-perfection-6477a29348e8c.jpeg?crop=1xw:1xh;center,top&resize=980:*"
     alt=""  className='img'/>
     
   
   
     </Row> 
     
     </div>
     
    </div>
    </div> 
     
  

   
  )
}

export default ListItem