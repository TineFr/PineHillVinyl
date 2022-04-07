import React from 'react'
import "./spotlight.scss"

export const NewestArrivals = () => {

  return (
    <>
    <section className="spotlight-section">
      <label className="spotlight-section-title">In the spotlight</label>
      <div className="spotlight-container">
         <div className="spotlight-container-item" id="item1">
         <div className="spotlight-item">
               <img className='imageBackground' src={require('../../../../assets/images/mountains.jpg')}alt="" loading="lazy" />
               <img className='blurredImage' src={require('../../../../assets/images/mountains.jpg')}alt="" loading="lazy"/>
         </div> 
         </div>
         <div className="spotlight-container-item" id="item2">
         <div className="spotlight-item">
               <img className='imageFront' src={require('../../../../assets/images/mountains.jpg')}alt="" loading="lazy" />
               <img className='blurredImageMain' src={require('../../../../assets/images/mountains.jpg')}alt="" loading="lazy" />
         </div> 
         </div>
         <div className="spotlight-container-item" id="item3">
         <div className="spotlight-item">
               <img className='imageBackground' src={require('../../../../assets/images/mountains.jpg')}alt=""  loading="lazy"/>
               <img className='blurredImage' src={require('../../../../assets/images/mountains.jpg')}alt=""  loading="lazy"/>
         </div> 
         </div>
      </div>
    </section> 
    
    </>
  )
}
