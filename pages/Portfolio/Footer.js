import React from 'react'

function Footer() {
  return (
    <div style={{ backgroundColor: '#FDA260' }}>
      <div className='FooterBar_container'>
        <div className='FooterBar_container_sectionOne_div_one'>
          <p className='footer-font_text'>Check out my other Portfolio</p>
        </div>
        <div className='FooterBar_container_sectionOne_div_two'>
          <div>
            <p className='footer-font_text'>Flipkart</p>
          </div>
          <div>
            <p className='footer-font_text'>Netflix</p>
          </div>
          <div>
            <p className='footer-font_text'>Instagram</p>
          </div>
          <div>
            <p className='footer-font_text'>Dynamic Portfolio</p>
          </div>
        </div>
      </div>
      <div className='FooterBar_container_two'>
      <p className='footer-font_text_other_text'>Handcrafted by Abhijeet kumar @2023</p>
      </div>
      
      </div>
  )
}

export default Footer