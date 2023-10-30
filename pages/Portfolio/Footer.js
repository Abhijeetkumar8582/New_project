import React from 'react';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const redirect = (e) => {
    router.push(e)
  }
  return (
    <div style={{ backgroundColor: '#FDA260' }}>
      <div className='FooterBar_container'>
        <div className='FooterBar_container_sectionOne_div_one'>
          <p className='footer-font_text'>Check out my other Portfolio design</p>
        </div>
        <div className='FooterBar_container_sectionOne_div_two'>
          <div>
            <button className='redirect_btn'  aria-label="Flipkart" onClick={()=>sessionStorage.getItem("UserName")?redirect("/Flipkart/MainPage"):redirect("/Flipkart/Home")}><p className='footer-font_text'>Flipkart</p></button>
          </div>
          <div>
            <button className='redirect_btn'  aria-label="Nextflix" onClick={()=>redirect("/Nextflix/Home")}><p className='footer-font_text'>Netflix</p></button>
          </div>
          <div>
            <button className='redirect_btn' aria-label="Instagram" onClick={()=>redirect("/Instagram/Home")}><p className='footer-font_text'>Instagram</p></button>
          </div>
          <div>
            <button className='redirect_btn' aria-label="Dynamic_Portfolio" onClick={()=>redirect('/Dynamic_Portfolio/Home')}> <p className='footer-font_text'>Dynamic Portfolio (WIP)</p></button>
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