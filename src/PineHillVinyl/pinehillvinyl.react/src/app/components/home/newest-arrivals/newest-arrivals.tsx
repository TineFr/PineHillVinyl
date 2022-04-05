import React from 'react'
import "./newest-arrivals.scss"

export const NewestArrivals = () => {

  return (
    <>
    <section className="newest-arrivals-section">
      <label className="arrivals-section-title">In the spotlight</label>
      <div className="newest-arrivals-container">
         <div className="newest-arrivals-container-item" id="item1">
         <div className="newest-arrival-item">
               <img className='imageBackground' src={require('../../../../assets/images/mountains.jpg')}alt="" />
               <img className='blurredImage' src={require('../../../../assets/images/mountains.jpg')}alt="" />
         </div> 
         </div>
         <div className="newest-arrivals-container-item" id="item2">
         <div className="newest-arrival-item">
               <img className='imageFront' src={require('../../../../assets/images/mountains.jpg')}alt="" />
               <img className='blurredImageMain' src={require('../../../../assets/images/mountains.jpg')}alt="" />
         </div> 
         </div>
         <div className="newest-arrivals-container-item" id="item3">
         <div className="newest-arrival-item">
               <img className='imageBackground' src={require('../../../../assets/images/mountains.jpg')}alt="" />
               <img className='blurredImage' src={require('../../../../assets/images/mountains.jpg')}alt="" />
         </div> 
         </div>
      </div>
    </section> 
    
    </>
  )
}
