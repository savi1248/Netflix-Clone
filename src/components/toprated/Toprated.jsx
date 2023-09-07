import React from 'react'
import Row from 'react-bootstrap/Row';
import "./toprated.scss"



const ListItem = () => {
  return (
    <div className='list'>
        <span className='listTitle '>Top Rated</span>
        
    <div className="listitem">
    <div className='container'>
    
    <Row>
       
    
    <img
     src='https://image.tmdb.org/t/p/w200/zMTpB0cx3egwDU0MjUBIykUDnXm.jpg'
      alt="" className="img"
    />
    
   
     <img
     src='https://image.tmdb.org/t/p/w200/imR6dHfuApFPYalreSuWQHeI17s.jpg'
      alt="" className="img"
    />
    
   
     <img 
     src='https://image.tmdb.org/t/p/w200/opMEH9JLmkYumUTJib321REvezr.jpg'
      alt="" className="img"
      
    />
    
    <img
    src='https://image.tmdb.org/t/p/w200/bnTXjwOwdUz8MKFyQCNf0hG4fdL.jpg'
     alt="" className='img' />
    <img
      src='https://image.tmdb.org/t/p/w200/xqKa1Z0hKqF4MUJrXA0v78zZhaM.jpg'
      alt="" className="img"
    />
    <img
    src='https://image.tmdb.org/t/p/w200/ubWpLTkwcms5PfZJMFZkNXVYXqJ.jpg'
      alt="" className="img"
    />
    <img 
    src='https://image.tmdb.org/t/p/w200/8o3agKlXNOIjN2SdCdbjLH48GKk.jpg'
     alt=""  className='img'/>
   
   
     </Row> 
     
     </div>
     
    </div>
    </div> 
     
  

   
  )
}

export default ListItem