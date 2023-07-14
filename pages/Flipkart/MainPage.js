import React, { useState } from 'react'
import About from '../Portfolio/About';
import Image from 'next/legacy/image'
import FlipkartNavBar from './FlipkartNavBar'
import Style from "/styles/Flipkart.module.css";
import experienceJson from '../Json/Expirence.json';
import ProjectJson from '../Json/Projects.json';
import AboutmeLicenses from '../Json/AboutmeLicenses.json';
import AboutmeSkills from '../Json/AboutmeSkills.json'
import Footer from './Footer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function MainPage() {
    const [showExpirenceDiv, setshowExpirenceDiv] = useState(false)
    const [validPincode, setvalidPincode] = useState(false)
    const [pincodeentered, setpincodeentered] = useState(false)
    const [valuefield, setvaluefield] = useState('')
    const handleClick = (event) => {
        console.log(event)
        window.open(event, '_blank');
    }
    const [open, setOpen] = useState({});
    const handleClickOpen = (tittle) => {
        setOpen({ ...open, [tittle]: true });

    };

    const handleClose = (tittle) => {
        setOpen({ ...open, [tittle]: false });
        var card_css_hover = document.querySelectorAll('.card')
        card_css_hover.forEach(function (card) {
            card.classList.remove('hover')
        })
    };
    const onPincodeEntered = (e) => {
        let value = e.target.value;
        if (!isNaN(value)) {
            if (e.nativeEvent.inputType === "deleteContentBackward") {
                setvaluefield(value);
            }
            if (valuefield.length <= 5) {
                setvaluefield(value)
            }
        }
    }
    const pincodeserver =[700122,560078,560076]
    const onPincodeEnteredFunction=()=>{
        if(valuefield.length==6){
            if(pincodeserver.includes(Number(valuefield))){
               console.log(true) 
            setvalidPincode(true)
            setpincodeentered(true)
            }
            else{
                console.log(false) 
                setpincodeentered(true)
                setvalidPincode(false)
            }
        }
    }
    return (

        <div>
            <FlipkartNavBar />
            <div style={{ padding: '10px' }}>
                <div className={Style.flipkartMainBox}>
                    <div className={Style.flipkartMainBox_Image}>
                        <div className={Style.flipkartMainboxImage_subimage}>
                            <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{ width: '100%' }} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{ width: '100%' }} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{ width: '100%' }} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box}><img style={{ width: '100%' }} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' /></div>
                        </div>
                        <div className={Style.flipkartMainboxImage_Mainimage}><img style={{ width: '100%' }} src="/Image/AbhiFlipkart.png" /></div>
                    </div>
                    <div className={Style.flipkartMainBox_Content}>
                        <div>
                            <p>India &gt; Bangalore &gt; Frontend developer &gt; Abhijeet Kumar</p>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <h3>Abhijeet kumar</h3>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
                            <div className={Style.ratingItem}><i className="fa fa-star" aria-hidden="true"></i><span>4.17</span></div>
                            <div>
                                <span> 578 ratings and 614 reviews   </span>
                            </div>
                        </div>
                        <div>
                            <h6>Available offers</h6>

                            <div style={{ margin: '2px' }}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{ maxWidth: '20px', margin: '0px 5px' }} /><span>Experience my passion for creativity and innovation through an engaging portfolio.</span></div>
                            <div style={{ margin: '2px' }}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{ maxWidth: '20px', margin: '0px 5px' }} /><span>Discover my specialization through a curated selection of my best work.</span></div>
                            <div style={{ margin: '2px' }}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{ maxWidth: '20px', margin: '0px 5px' }} /><span>See how I've helped clients achieve their goals through my portfolio solutions.</span></div>
                            {/* <div style={{margin: '2px'}}> <img src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' style={{maxWidth: '20px',margin:'0px 5px'}}/><span>Special PriceGet at flat ₹279</span></div> */}
                        </div>
                        <div style={{ marginBottom: '50px' }}>
                            <div style={{ margin: '20px 0px 5px' }}><i className="fa fa-map-marker" aria-hidden="true"></i><span> Please enter pincode</span></div>
                            <div style={{ display: 'inline-flex' }}>
                                <input className={Style.pincodeInput} value={valuefield} onChange={(e) => onPincodeEntered(e)} />
                                <button className={Style.pincodebtn} onClick={onPincodeEnteredFunction}><span className={Style.pincodeCheckText}>Check</span></button>

                            </div>
                            {pincodeentered ? (<div>{validPincode ? <p>Work from office is possible</p> : <p>Remote Work only</p>}</div>) : null}
                        </div>
                        <div style={{ maxWidth: '250px', marginBottom: '30px' }}>
                            <button className={Style.letsTalkBtn}>let's have a chat</button>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4 className={Style.aboutmeText}>About Me</h4>
                            </div>
                            <div>
                                <p className={Style.Contentjustify}>Hi there! I'm Abhijeet, a tech enthusiast who loves to explore new technologies. I have a strong passion for creating digital content that thrives on the internet. Back in 2020, my journey into web development began with SQL, and since then, I've been building apps using React, which has been an incredibly exciting experience.</p>
                                <p className={Style.Contentjustify}>Currently, I'm fortunate to be working for an AI startup where my responsibilities include designing chatbots, integrating them into systems, and assisting customers with their inquiries. My ultimate goal is to expand my knowledge across various programming languages. I strongly believe that this pursuit will enable me to become a more adaptable and versatile developer, capable of taking on diverse challenges.</p>
                                <p className={Style.Contentjustify}>Occasionally, I find myself contemplating whether I'm fixing a bug or if the bug is the one in control. Interestingly, I even dream about bugs, envisioning epic battles where I assume the role of Godzilla, the mighty king of monsters, confronting the formidable King Kong. It's an exhilarating and surreal experience, to say the least.</p>
                            </div>
                        </div>

                        <div>
                            <div className={Style.divboxHeading}>
                                <h4 className={Style.aboutmeText}>Experience</h4>
                                <button className={Style.showdivBtn} onClick={() => showExpirenceDiv ? setshowExpirenceDiv(false) : setshowExpirenceDiv(true)}>{showExpirenceDiv ? (<i className="fa fa-minus" aria-hidden="true"></i>) : (<i className="fa fa-plus" aria-hidden="true"></i>)}</button>
                            </div>
                            {showExpirenceDiv ? (<div>
                                {experienceJson.map((element, i) => (
                                    <div className={Style.experienceJsonmaindiv} key={i}>
                                        <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
                                            <img style={{ maxWidth: '50px' }} src={element.logo} />
                                        </div>
                                        <div className={Style.experienceJsondiv}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>{element.desginstion}</p>
                                                <p>{element.timeline}</p>
                                            </div>
                                            <p>{element.jobRole}</p>

                                        </div>
                                    </div>

                                ))}
                            </div>) : null}
                        </div>
                    </div>
                </div>

                <div style={{ background: 'white', marginTop: '15px' }}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: 'wrap' }}>
                        {AboutmeSkills.map((element, i) => (
                            <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }} key={i}>
                                <div><img src={element.logo} style={{ maxWidth: '60px', margin: '0px 5px' }} /></div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>{element.skills}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.projectDiv}>
                    <div className={`${Style.projectdivtext} ${Style.headingtext}`}>
                        <h4>You might be interested in my Projects</h4>
                    </div>
                    <div style={{ display: 'flex', overflowX: 'scroll' }}>
                        {ProjectJson.map((element, i) => (
                            <div className={Style.projectDivItem} key={i}>
                                <div><img src={element.image} style={{ width: '100%', margin: '0px 5px' }} /></div>
                                <div className={Style.projectDivItemcontent}>
                                    <h6>{element.title}</h6>
                                    <p className={Style.Contentjustify}>{element.description}</p>
                                    <p><strong>{element.code}</strong></p>
                                    <button className={Style.viewProjectBtn} onClick={() => handleClick(element.button)}>View Project</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.AchievementsMainDiv}>
                    <div style={{ padding: '15px', background: 'white' }}>
                        <div className={`${Style.AchievementsdivText} ${Style.headingtext}`}>
                            <h4>Recent Achievements</h4>
                        </div>
                        <div className={Style.Contentjustify}>
                            I have secured the third position in the yellow.ai Hackathon by proposing an innovative use case for our organization. We came up with an idea to develop a chatbot that would allow restaurants to donate their excess food to nearby non-profit organizations. The bot would collect all the necessary information about the food, owners, and other relevant details to facilitate the process. With the help of my teammates, we were able to achieve this accomplishment, and I am incredibly proud of our efforts. <a href="https://www.credential.net/0a51513b-b774-4d73-90d1-75a96b80603e" target="_blank" style={{ color: "tomato !important " }}><strong>View Certificate</strong></a>
                        </div>
                    </div>
                </div>

                <div className={Style.LicensesmainDiv}>
                    <div style={{ padding: '15px', background: 'white' }}>
                        <div className={`${Style.AchievementsdivText} ${Style.headingtext}`}  >
                            <h4>Frequently got Licenses/Certifications</h4>
                        </div>
                        <div className={Style.Licensesmaindiv_map} >
                            {AboutmeLicenses.map((element, i) => (
                                <div className={Style.LicensesmainDivitem} key={i}>
                                    <div style={{ width: '30%', alignItems: 'center', display: 'flex' }}> <img src={element.logo} style={{ width: '100%', margin: '0px 0px' }} /></div>
                                    <div className={Style.LicensesmainDivitemcontent}>
                                        <div><h6>{element.tittle}</h6></div>
                                        <div><p>{element.description}</p></div>
                                        <button className={Style.viewProjectBtn} onClick={() => handleClickOpen(element.tittle)} >View Project</button>
                                    </div>
                                    <Dialog
                                        disablePortal
                                        sx={{ width: "100%" }}
                                        open={open[element.tittle] || false}
                                        onClose={() => handleClose(element.tittle)}
                                        // onExited={() => handleClose(element.tittle)}
                                        maxWidth="xl"
                                    >
                                        <DialogTitle>{element.tittle}</DialogTitle>
                                        <DialogContent>
                                            <Image src={element.certificate} onError={() => { element.certificate = "/Image/aboutPageImage.jpg" }} priority alt={element.tittle} width={950} height={550}></Image>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => handleClose(element.tittle)}>Perfect!!!</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MainPage