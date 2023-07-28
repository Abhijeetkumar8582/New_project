import React from 'react'
import Style from "/styles/Netflix.module.css";
import experienceJson from '../Json/Expirence.json';
import ProjectJson from '../Json/Projects.json';
import AboutmeSkills from '../Json/AboutmeSkills.json';
import AboutmeLicenses from '../Json/AboutmeLicenses.json';



function Main() {
    return (
        <>    <div style={{ background: 'black', color: 'white' }}>
            <div>
                {/* <img style={{width:'100%',maxHeight:"600px"}} src='https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> */}
                <video autoPlay style={{ width: '100%', maxHeight: "500px" }} src='https://videos.ctfassets.net/w8fc6tgspyjz/3Wrtk4wjYnPVgyGo2W2jMu/649d7a46771615f217afad085d747b0f/header-graphic-v08-vp9.webm' />
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', padding: '1rem 4rem' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div><h6 className={Style.headingTag}>2023</h6></div>
                        <div><h6 className={Style.headingTag}>HD</h6></div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div><h6 className={Style.headingTag}>#1 in Portfolio </h6></div>
                        <div><h6 className={Style.headingTag}>Today</h6></div>
                    </div>
                    <div><h4>Episode 1</h4></div>
                    <div><p>The autoplay attribute is a boolean attribute. The autoplay attribute is a boolean attribute.</p></div>
                </div>
                <div style={{ width: '50%', padding: '1rem 4rem' }}>
                    <div style={{display:'flex'}}>
                        <h4 className={Style.headingTag}>Skils:</h4>
                        {AboutmeSkills && AboutmeSkills.map((element)=>(<p style={{margin:'0px 10px',fontSize:'15px'}}>{element.skills}</p>))}
                    </div>
                    <div>
                        <h4 className={Style.headingTag}>Created by: Abhijeet Kumar</h4>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex',margin:'3px 2rem', justifyContent: 'flex-start',  borderBottom: "2px solid white" }}>
                <div><h2>Experience Episode</h2></div>
               
            </div>
            <div>
                {experienceJson.map((element,i)=>(
                    <div className={Style.educationNetflix}>
                    <div style={{width:'5%',display:'flex',alignItems:'center'}}><h6>{i+1}</h6></div>
                    <div style={{width:'5%',display:'flex',alignItems:'center'}}><img src={element.logo} style={{maxWidth:'40px'}}/></div>
                    <div style={{width:'75%',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}><h6>{element.desginstion}</h6>
                    <p>{element.jobRole.slice(0,100)}...</p></div>
                    <div style={{width:'15%',display:'flex',alignItems:'center'}}><h6 >{element.timeline}</h6></div>
    
                </div>
                ))}
            </div>

            <div>
                <div style={{display:'flex',justifyContent:'flex-start',margin:'3rem 2rem'}}>
                    <h2>More like this</h2>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',gap:'40px',flexWrap:'wrap'}}>
                {ProjectJson && ProjectJson.map((element)=>(
                    <div style={{maxWidth:"300px",background:"#444444",display:'flex',flexDirection:'column',marginBottom:'20px'}}>
                    <div style={{marginBottom:'10px'}} >
                        <img src={element.image} style={{width:'100%'}} />
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',margin:'0px 1rem 10px'}}>
                            <div>2023</div>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                        </div>
                        <div style={{padding:'0rem 1rem'}}>
                            <h6 style={{fontSize:'15px'}}>{element.title}</h6>
                        </div>
                        <div style={{padding:'0rem 1rem',marginBottom:'20px'}}>
                            <h6 className={Style.project_div_description}>
                                {element.description}
                            </h6>
                        </div>
                  
                </div>
                ))} 
                    
            </div>
            <div>
                <div style={{display:'flex',justifyContent:'flex-start',margin:'3rem 2rem'}}>
                    <h2>Licenses Trailer</h2>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',gap:'40px',flexWrap:'wrap'}}>
                {AboutmeLicenses && AboutmeLicenses.map((element)=>(
                    <div style={{maxWidth:"300px",background:"#444444",display:'flex',flexDirection:'column',marginBottom:'20px'}}>
                 
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'10px 1rem 10px'}}>
                            <div>                        <img src={element.logo} style={{width:'10%'}} /></div>
                            <i class="fa fa-folder-open" aria-hidden="true"></i>
                        </div>
                        <div style={{padding:'0rem 1rem'}}>
                            <h6 style={{fontSize:'15px'}}>{element.tittle}</h6>
                        </div>
                        <div style={{padding:'0rem 1rem',marginBottom:'20px'}}>
                            <h6 className={Style.project_div_description}>
                                {element.description}
                            </h6>
                        </div>
                  
                </div>
                ))} 
                    
            </div>
        </div>
        </>

    )
}

export default Main