import React, { useState } from 'react'
import About from '../Portfolio/About';
import FlipkartNavBar from './FlipkartNavBar'
import Style from "/styles/Flipkart.module.css";
import experienceJson from '../Json/Expirence.json';
function MainPage() {
    const [showExpirenceDiv,setshowExpirenceDiv]=useState(false)
    const [showeudcationDiv,setshoweudcationDiv]=useState(false)
    return (

        <div>
            <FlipkartNavBar />
            <div style={{padding:'10px'}}>
            <div className={Style.flipkartMainBox}>
                <div className={Style.flipkartMainBox_Image}>
                    <div className={Style.flipkartMainboxImage_subimage}>
                    <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{width:'100%'}} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png'/></div>
                        <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{width:'100%'}} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png'/></div>
                        <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{width:'100%'}} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png'/></div>
                        <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{width:'100%'}} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png'/></div>
                        </div>
                    <div className={Style.flipkartMainboxImage_Mainimage}><img style={{ width: '100%' }} src="/Image/AbhiFlipkart.png" /></div>
                </div>
                <div className={Style.flipkartMainBox_Content}>
                    <div>
                    <p>India &gt; Bangalore &gt; Frontend developer &gt; Abhijeet Kumar</p>
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <h3>Abhijeet kumar</h3>
                    </div>
                    <div style={{display:'flex',marginBottom:'10px',alignItems:'center'}}>
                    <div className={Style.ratingItem}><i class="fa fa-star" aria-hidden="true"></i><span>4.17</span></div>
                    <div>
                        <span> 578 ratings and 614 reviews   </span>
                    </div>
                    </div>
                    <div>
                        <h6>Available offers</h6>
                    
                           <div style={{margin: '2px'}}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{maxWidth: '20px',margin:'0px 5px'}}/><span>Experience my passion for creativity and innovation through an engaging portfolio.</span></div>
                           <div style={{margin: '2px'}}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{maxWidth: '20px',margin:'0px 5px'}}/><span>Discover my specialization through a curated selection of my best work.</span></div>
                           <div style={{margin: '2px'}}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{maxWidth: '20px',margin:'0px 5px'}}/><span>See how I've helped clients achieve their goals through my portfolio solutions.</span></div>
                           {/* <div style={{margin: '2px'}}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{maxWidth: '20px',margin:'0px 5px'}}/><span>Special PriceGet at flat ₹279</span></div> */}
                    </div>
                    <div style={{marginBottom:'50px'}}>
                        <div style={{margin:'20px 0px 5px'}}><i class="fa fa-map-marker" aria-hidden="true"></i><span> Please enter pincode</span></div>
                        <div style={{display:'inline-flex'}}>
                        <input className={Style.pincodeInput}/>
                        <span className={Style.pincodeCheckText}>Check</span>
                        </div>
                    </div>
                    <div style={{maxWidth:'250px',marginBottom:'30px'}}>
                    <button className={Style.letsTalkBtn}>let's have a chat</button>
                    </div>
                    <div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <h4 className={Style.aboutmeText}>About Me</h4>
                        {/* <button className={Style.showdivBtn} onClick={()=>showExpirenceDiv?setshowdiv(false):setshowdiv(true)}><i class="fa fa-plus" aria-hidden="true"></i></button> */}
                    </div>
                    <div>
                    <p>Hi there! I'm Abhijeet, a tech enthusiast who loves to explore new technologies. I have a strong passion for creating digital content that thrives on the internet. Back in 2020, my journey into web development began with SQL, and since then, I've been building apps using React, which has been an incredibly exciting experience.</p>
                    <p>Currently, I'm fortunate to be working for an AI startup where my responsibilities include designing chatbots, integrating them into systems, and assisting customers with their inquiries. My ultimate goal is to expand my knowledge across various programming languages. I strongly believe that this pursuit will enable me to become a more adaptable and versatile developer, capable of taking on diverse challenges.</p>
                        <p>Occasionally, I find myself contemplating whether I'm fixing a bug or if the bug is the one in control. Interestingly, I even dream about bugs, envisioning epic battles where I assume the role of Godzilla, the mighty king of monsters, confronting the formidable King Kong. It's an exhilarating and surreal experience, to say the least.</p>
                    </div>
                    </div>
                    <div >
                    <div className={Style.divboxHeading}>
                        <h4 className={Style.aboutmeText}>Education</h4>
                        <button className={Style.showdivBtn} onClick={()=>showeudcationDiv?setshoweudcationDiv(false):setshoweudcationDiv(true)}>{showeudcationDiv?(<i class="fa fa-minus" aria-hidden="true"></i>):(<i class="fa fa-plus" aria-hidden="true"></i>)}</button>
                    </div>
                   {showeudcationDiv?(<div>
                    <div><p>University of Calcutta</p></div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><p>Bachelor of Commerce (Hons) Accountancy </p></div>
                    <div><p>June 2017   - Nov 2020</p></div>
                    </div>
                   
                    </div>):null} 
                    </div>
                    <div>
                    <div className={Style.divboxHeading}>
                        <h4 className={Style.aboutmeText}>Experience</h4>
                        <button className={Style.showdivBtn} onClick={()=>showExpirenceDiv?setshowExpirenceDiv(false):setshowExpirenceDiv(true)}>{showExpirenceDiv?(<i class="fa fa-minus" aria-hidden="true"></i>):(<i class="fa fa-plus" aria-hidden="true"></i>)}</button>
                    </div>
                    {showExpirenceDiv?(<div>
                        {experienceJson.map((element)=>(
                            <div className={Style.experienceJsonmaindiv}>
                                <div style={{width:'10%',display:'flex',alignItems:'center'}}>
                                    <img style={{maxWidth:'50px'}} src={element.logo}/>
                                </div>
                                <div className={Style.experienceJsondiv}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>{element.desginstion}</p>
                            <p>{element.timeline}</p>
                            </div>
                            <p>{element.jobRole}</p>
                           
                            </div>
                            </div>
        
                        ))}
                    </div>):null}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MainPage