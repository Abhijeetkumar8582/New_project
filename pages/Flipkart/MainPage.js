import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Head from 'next/head';
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
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';




function MainPage() {
    const [showExpirenceDiv, setshowExpirenceDiv] = useState(false)
    const [validPincode, setvalidPincode] = useState(false)
    const [pincodeentered, setpincodeentered] = useState(false)
    const [valuefield, setvaluefield] = useState('')
    const [mainImageUrl, setMainImageUrl] = useState('/Image/Abhijeetkumar2.webp');
    const pincodeserver = [700122, 560078, 560076];
    const handleClick = useCallback((event) => {
        window.open(event, '_blank');
    }, [])
    const [open, setOpen] = useState({});
    const handleClickOpen = useCallback((tittle) => {
        setOpen({ ...open, [tittle]: true });

    }, [open, setOpen]);

    const handleClose = useCallback((tittle) => {
        setOpen({ ...open, [tittle]: false });
        var card_css_hover = document.querySelectorAll('.card')
        card_css_hover.forEach(function (card) {
            card.classList.remove('hover')
        })
    }, [open, setOpen]);

    const onPincodeEntered = useCallback((e) => {
        let value = e.target.value;
        if (!isNaN(value)) {
            if (e.nativeEvent.inputType === "deleteContentBackward") {
                setvaluefield(value);
            }
            if (valuefield.length <= 5) {
                setvaluefield(value)
            }
        }
    }, [valuefield, setvaluefield]);


    const [screenDimensions, setScreenDimensions] = useState({
        screenWidth: 0,
        screenHeight: 0,
    });

    const handleResize = () => {
        setScreenDimensions({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            setScreenDimensions({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            });
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    // -___-----------________

    const onPincodeEnteredFunction = useCallback(() => {
        if (valuefield.length == 6) {
            if (pincodeserver.includes(Number(valuefield))) {
                setvalidPincode(true)
                setpincodeentered(true)
            }
            else {
                setpincodeentered(true)
                setvalidPincode(false)
            }
        }
    }, [valuefield, setvalidPincode, setpincodeentered]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickQuestion = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl]);

    const handleCloseQuestion = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const openquestion = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleImageHover = useCallback((newImageUrl) => {
        setMainImageUrl(newImageUrl);
    }, [setMainImageUrl]);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const achievementsRef = useRef(null);
    const licensesRef = useRef(null);

    const scrollBtn = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [OddProject, SetOddProject] = useState(1)
    const [OddLicense, SetOddLicense] = useState(1)
    const [prevbuttonIndex, setprevbuttonIndex] = useState(0);
    const [nextbuttonIndex, setnextbuttonIndex] = useState(ProjectJson.length >= 3 ? 3 : ProjectJson.length);
    const [prevLicenseIndex, setprevLicenseIndex] = useState(0);
    const [nextLicenseIndex, setnextLicenseIndex] = useState(AboutmeLicenses.length >= 4 ? 4 : AboutmeLicenses.length);
    const [getAboutmeLicenses, setAboutmeLicenses] = useState(AboutmeLicenses.length)

    useEffect(() => {

        if (screenDimensions.screenWidth < 769) {
            setnextbuttonIndex(1);
            setnextLicenseIndex(1);
            setAboutmeLicenses(AboutmeLicenses.length)
        } else if (screenDimensions.screenWidth > 769 && screenDimensions.screenWidth < 1080) {
            setnextbuttonIndex(2);
            setnextLicenseIndex(2);
            setAboutmeLicenses(AboutmeLicenses.length + 1)
            SetOddProject(ProjectJson.length % 2 == 0 ? 2 : 1)
            SetOddLicense(AboutmeLicenses.length % 2 == 0 ? 2 : 1)
        }
        else if (screenDimensions.screenWidth > 1080 && screenDimensions.screenWidth < 1250) {
            setnextbuttonIndex(3);
            setnextLicenseIndex(2);
            setAboutmeLicenses(AboutmeLicenses.length + 1)
            SetOddProject(ProjectJson.length % 2 == 0 ? 3 : 2)
            SetOddLicense(AboutmeLicenses.length % 2 == 0 ? 3 : 2)
        }
        else {
            setnextbuttonIndex(ProjectJson.length >= 4 ? 4 : ProjectJson.length);
            setnextLicenseIndex(AboutmeLicenses.length >= 4 ? 4 : AboutmeLicenses.length)
            setAboutmeLicenses(AboutmeLicenses.length + 1);
            SetOddProject(ProjectJson.length % 2 == 0 ? 2 : 1)
            SetOddLicense(AboutmeLicenses.length % 2 == 0 ? 2 : 1)
        }
    }, [screenDimensions.screenWidth, setnextbuttonIndex, setAboutmeLicenses, SetOddProject, SetOddLicense]);

    const prevbutton = () => {
        if (prevbuttonIndex !== 0) {
            setnextbuttonIndex(nextbuttonIndex - OddProject);
            setprevbuttonIndex(prevbuttonIndex - OddProject);


        }
    };
    const nextbutton = () => {
        console.log(nextbuttonIndex)
        if (nextbuttonIndex !== ProjectJson.length && nextbuttonIndex < ProjectJson.length + OddProject + 1) {
            setprevbuttonIndex(prevbuttonIndex + OddProject);
            setnextbuttonIndex(nextbuttonIndex + OddProject);
        }
    };

    const preLicensesButton = () => {
        if (prevLicenseIndex !== 0) {
            setprevLicenseIndex(prevLicenseIndex - 1);
            setnextLicenseIndex(nextLicenseIndex - 1)

        }
    }
    const nextLicensesButton = () => {
        if (nextbuttonIndex !== AboutmeLicenses.length) {

            setprevLicenseIndex(prevLicenseIndex + 1);
            setnextLicenseIndex(nextLicenseIndex + 1)
        }
    };
    const [ChatOpen, setChatOpen] = React.useState(false);
    const handleOpenChatButton = () => setChatOpen(true);
    const handleCloseChatButton = () => setChatOpen(false);

    const [UserName, setUserName] = useState('')
    const [UserNameError, setUserNameError] = useState(false)
    const [UserNameMessage, setUserNameMessage] = useState('Name')
    const [UserEmail, setUserEmail] = useState('')
    const [UserEmailError, setUserEmailError] = useState(false)
    const [UserEmailMessage, setUserEmailMessage] = useState('Email')
    const [UserMessage, setUserMessage] = useState('')
    const [isFormSubmitted, setFormsubmitted] = useState(false)

    const UserNameFeild = (e) => {
        setUserNameError(false)
        setUserNameMessage('Name')
        setUserName(e.target.value)
    }
    const UserEmailFeild = (e) => {
        setUserEmailError(false)
        setUserEmailMessage("Email")
        setUserEmail(e.target.value)

    }
    const UsermessageFeild = (e) => {
        setUserMessage(e.target.value)
    }
    const OnsubmitChatButton = () => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const isNameValid = nameRegex.test(UserName);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isEmailValid = emailRegex.test(UserEmail)
        if (isEmailValid && isNameValid) {
            setFormsubmitted(true)
            setTimeout(() => {
                setChatOpen(false)
            }, 5000);
            console.log(true, UserEmail, UserName, UserMessage);
        } else if (isEmailValid === false && isNameValid === false) {
            setUserEmailError(true)
            setUserNameError(true)
            setUserEmailMessage("Incorrect Email")
            setUserNameMessage("Incorrect Name")
        }
        else if (isEmailValid === false) {
            setUserEmailError(true)
            setUserEmailMessage("Incorrect Email")

        } else {
            setUserNameError(true)
            setUserNameMessage("Incorrect Name")
        }
    }


    return (

        <div>
            <Head>
                <title>Flipkart - Abhijeet</title>
                <meta property="og:title" content="Flipkart - Abhijeet" />
                <meta property="og:description" content="I'm designing my portfolio as a Flipkart-inspired UI, also developing a search algorithm for easy inquiries about me. Exciting things coming soon!" />
                <meta property="og:image" content="/Image/flipkartUi.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:url" content="https://abhijeetkumar-developer.netlify.app/Flipkart/Home" />
                <meta property="og:type" content="website" />
            </Head>
            <FlipkartNavBar />


            <div className={Style.SubNavbar}>
                <h6 className={Style.subNavbarText} onClick={() => scrollBtn(aboutRef)}>About Me</h6>
                <h6 className={Style.subNavbarText} onClick={() => { scrollBtn(experienceRef); setshowExpirenceDiv(true); }} >Experience</h6>
                <h6 className={Style.subNavbarText} onClick={() => scrollBtn(projectsRef)} >Projects</h6>
                <h6 className={Style.subNavbarText} onClick={() => scrollBtn(achievementsRef)} >Achievements</h6>
                <h6 className={Style.subNavbarText} onClick={() => scrollBtn(licensesRef)} >Licenses/Certifications</h6>
            </div>


            <div style={{ padding: '10px' }}>
                <div className={Style.flipkartMainBox}>
                    <div className={Style.flipkartMainBox_Image}>
                        <div className={Style.flipkartMainboxImage_subimage}>
                            <div className={Style.flipkartMainboxImage_subimage_Box} onMouseOver={() => handleImageHover('/Image/Abhijeetkumar2.webp')}><Image loading='lazy' width={60} height={60} style={{ maxWidth: '100%', objectFit: 'contain' }} alt="MyImage" src='/Image/Abhijeetkumar2.webp' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box} onMouseOver={() => handleImageHover('/Image/AbhijeetKumar_1.webp')}><Image loading='lazy' width={60} height={60} alt="MyImage" style={{ maxWidth: '100%', objectFit: 'contain' }} src='/Image/AbhijeetKumar_1.webp' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box} onMouseOver={() => handleImageHover('/Image/abhijeet_kumar_3.jpg')}><Image alt="MyImage" loading='lazy' width={60} height={60} style={{ maxWidth: '100%', objectFit: 'contain' }} src='/Image/abhijeet_kumar_3.jpg' /></div>
                            <div className={Style.flipkartMainboxImage_subimage_Box} onMouseOver={() => handleImageHover('/Image/Abhijeet_kumar_4.webp')}><Image loading='lazy' width={60} height={60} style={{ maxWidth: '100%', objectFit: 'contain' }} alt="MyImage" src='/Image/Abhijeet_kumar_4.webp' /></div>
                        </div>
                        <div className={Style.flipkartMainboxImage_Mainimage}><Image loading='lazy' alt="MyImage" style={{ objectFit: "contain", maxWidth: '100%', maxHeight: '100%' }} width={500} height={500} quality={100} src={mainImageUrl} /></div>
                    </div>
                    <div className={Style.flipkartMainBox_Content}>
                        <div>
                            <p>India &gt; Bangalore &gt; Frontend developer &gt; Abhijeet Kumar</p>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <h3>Abhijeet kumar</h3>
                        </div>
                        <div className={Style.ratingDiv}>
                            <div className={Style.ratingItem}><i className="fa fa-star" aria-hidden="true"></i><span>4.17</span></div>
                            <div>
                                <span> 578 ratings and 614 reviews   </span>
                            </div>
                        </div>
                        <div>
                            <h6>Available offers</h6>
                            <div className={Style.Available_offers_div}> <Image alt="MyImage" loading='lazy' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' className={Style.Available_offers_div_img} /><span className={Style.Contentjustify}> &nbsp;Experience my passion for creativity and innovation through an engaging portfolio.</span></div>
                            <div className={Style.Available_offers_div}> <Image alt="MyImage" loading='lazy' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' className={Style.Available_offers_div_img} /><span className={Style.Contentjustify}> &nbsp;Discover my specialization through a curated selection of my best work.</span></div>
                            <div className={Style.Available_offers_div}> <Image alt="MyImage" loading='lazy' width={20} height={20} src='https://cdn-icons-png.flaticon.com/512/1831/1831655.png' className={Style.Available_offers_div_img} /><span className={Style.Contentjustify}> &nbsp;See how I've helped clients achieve their goals through my portfolio solutions.</span></div>
                        </div>
                        <div style={{ marginBottom: '50px' }}>
                            <div style={{ margin: '20px 0px 5px' }}><i className="fa fa-map-marker" style={{ color: 'red' }} aria-hidden="true"></i><span> Please enter pincode</span></div>
                            <div style={{ display: 'inline-flex' }}>
                                <input className={Style.pincodeInput} placeholder="Enter here..." value={valuefield} onChange={(e) => onPincodeEntered(e)} />
                                <button aria-label="pincode" className={Style.pincodebtn} onClick={onPincodeEnteredFunction}><span className={Style.pincodeCheckText}>Check</span></button>

                            </div>

                            {pincodeentered ? (<div>{validPincode ? <p>Work from office is possible</p> : <p>Remote Work only <i onClick={handleClickQuestion} class="fa fa-question-circle" aria-hidden="true"></i></p>}</div>) : null}
                            <Popover
                                id={id}
                                open={openquestion}
                                anchorEl={anchorEl}
                                onClose={handleCloseChatButton}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <div style={{ maxWidth: '500px' }}>
                                    <Typography sx={{ p: 2 }}>Please send me an email with the location where you want me to work. I am currently residing in Bangalore.</Typography>
                                </div>
                            </Popover>
                        </div>
                        <div style={{ maxWidth: '250px', marginBottom: '30px' }}>
                            <button aria-label="letsTalkBtn" className={Style.letsTalkBtn} onClick={handleOpenChatButton}>let's have a chat</button>
                        </div>


                        <Dialog
                            open={ChatOpen}
                            onClose={handleCloseChatButton}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            maxWidth="xl"
                        >

                            <DialogContent sx={{ p: '0' }}>
                                <div className={Style.LetsChatMain_Div}>
                                    <div className={Style.LetsChatMain_Div_image}>
                                        <img src='https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg?w=1060&t=st=1696412369~exp=1696412969~hmac=39b91b4f4edf40748465fb1c4772310c5769c44c1b98559989ffe14b1e20235d' className={Style.LetsChatMain_image} />
                                    </div>
                                    <div className={Style.LetsChatMain_Div_content}>
                                        {isFormSubmitted ? (<div style={{ margin: '0px 10px' }}>
                                            <h5>Thanks for sharing your info!<br /> I'll reach out soon to chat. - {UserName}</h5>
                                        </div>) : (<div className={Style.inputBox}>
                                            <div>
                                                <h5 className={Style.aboutmeText}> Let's have some discussion!!</h5>
                                            </div>
                                            <div >

                                                <div >
                                                    <div style={{ marginTop: '10px' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                            <TextField error={UserNameError} id="input-with-sx" onChange={(e) => UserNameFeild(e)} value={UserName} style={{ width: '270px' }} required label={UserNameMessage} variant="standard" />
                                                        </Box>
                                                    </div>
                                                    <div style={{ marginTop: '10px', color: 'white' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                            <TextField error={UserEmailError} id="input-with-sx" onChange={(e) => UserEmailFeild(e)} value={UserEmail} style={{ width: '270px' }} required label={UserEmailMessage} variant="standard" />
                                                        </Box>
                                                    </div>
                                                    <div style={{ marginTop: '10px' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                            <CommentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                            <TextField id="input-with-sx" onChange={(e) => UsermessageFeild(e)} value={UserMessage} style={{ width: '270px' }} label="Message" variant="standard" />
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={Style.button_flipkart_chat} onClick={OnsubmitChatButton}>Submit</button>
                                        </div>)}

                                    </div>
                                </div>
                            </DialogContent>

                        </Dialog>



                        <div ref={aboutRef}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4 className={Style.aboutmeText}>About Me</h4>
                            </div>
                            <div>
                                <p className={Style.Contentjustify}>Hi there! I'm Abhijeet, a tech enthusiast who loves to explore new technologies. I have a strong passion for creating digital content that thrives on the internet. Back in 2020, my journey into web development began with SQL, and since then, I've been building apps using React, which has been an incredibly exciting experience.</p>
                                <p className={Style.Contentjustify}>Currently, I'm fortunate to be working for an AI startup where my responsibilities include designing chatbots, integrating them into systems, and assisting customers with their inquiries. My ultimate goal is to expand my knowledge across various programming languages. I strongly believe that this pursuit will enable me to become a more adaptable and versatile developer, capable of taking on diverse challenges.</p>
                                <p className={Style.Contentjustify}>Occasionally, I find myself contemplating whether I'm fixing a bug or if the bug is the one in control. Interestingly, I even dream about bugs, envisioning epic battles where I assume the role of Godzilla, the mighty king of monsters, confronting the formidable King Kong. It's an exhilarating and surreal experience, to say the least.</p>
                            </div>
                        </div>

                        <div ref={experienceRef}>
                            <div className={Style.divboxHeading} onClick={() => showExpirenceDiv ? setshowExpirenceDiv(false) : setshowExpirenceDiv(true)} >
                                <h4 className={Style.aboutmeText}>Experience</h4>
                                <button aria-label={showExpirenceDiv ? 'Collapse Experience' : 'Expand Experience'} className={Style.showdivBtn} onClick={() => showExpirenceDiv ? setshowExpirenceDiv(false) : setshowExpirenceDiv(true)}>{showExpirenceDiv ? (<i className="fa fa-minus" aria-hidden="true"></i>) : (<i className="fa fa-plus" aria-hidden="true"></i>)}</button>
                            </div>
                            {showExpirenceDiv ? (<div>
                                {experienceJson.map((element, i) => (
                                    <div className={Style.experienceJsonmaindiv} key={i}>
                                        <div className={Style.experienceJsonImageDiv}>
                                            <Image alt="MyImage" loading='lazy' width={50} height={50} style={{ maxWidth: "100%" }} src={element.logo} />
                                        </div>
                                        <div className={Style.experienceJsondiv}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p >{element.desginstion}</p>
                                                <p>{element.timeline}</p>
                                            </div>
                                            <p className={Style.Contentjustify}>{element.jobRole}</p>

                                        </div>
                                    </div>

                                ))}
                            </div>) : null}
                        </div>
                    </div>
                </div>

                <div style={{ background: 'white', marginTop: '15px' }}>
                    <div className={Style.Skills_sub_Main_div}>
                        {AboutmeSkills.map((element, i) => (
                            <div className={Style.Skills_sub_div} key={i}>
                                <div style={{ display: 'flex', alignItems: 'center' }}><Image alt="MyImage" loading='lazy' width={40} height={40} src={element.logo} style={{ maxWidth: '40px', marginLeft: '5px' }} /></div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>{element.skills}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.projectDiv} ref={projectsRef} >
                    <div className={`${Style.projectdivtext} ${Style.headingtext}`}>
                        <h4>You might be interested in my Projects</h4>
                    </div>
                    <div className={Style.Flipkart_Content_Skills_div_container}>
                        {prevbuttonIndex === 0 ? (
                            <div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                <button className={Style.prevbutton} style={{ background: "transparent" }} disabled onClick={prevbutton}>
                                    <i className="fa fa-arrow-circle-left" style={{ color: 'white', backgroundColor: 'transparent' }} aria-hidden="true"></i>
                                </button>
                            </div>
                        ) : (
                            <div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                <button className={Style.prevbutton} style={{ background: "transparent" }} onClick={prevbutton}>
                                    <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                </button>
                            </div>
                        )}

                        <div className={Style.Flipkart_Content_Skills_div_Main}>
                            {ProjectJson.slice(prevbuttonIndex, nextbuttonIndex).map((element, i) => (
                                <div className={Style.projectDivItem} key={i}>
                                    <div><Image alt="MyImage" loading='lazy' width={400} height={200} src={element.image} /></div>
                                    <div className={Style.projectDivItemcontent}>
                                        <h6>{element.title}</h6>
                                        <p className={Style.Contentjustify}>{element.description}</p>
                                        <p className={Style.Contentjustify}><strong>{element.code}</strong></p>
                                        <button aria-label='viewProjectBtn' className={Style.viewProjectBtn} onClick={() => handleClick(element.button)}><strong>View Project</strong></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {nextbuttonIndex == ProjectJson.length && nextbuttonIndex < ProjectJson.length + OddProject + 1 ? (<div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                            <button className={Style.prevbutton} style={{ background: "transparent" }} disabled onClick={nextbutton}>
                                <i className="fa fa-arrow-circle-right" style={{ color: 'white' }} aria-hidden="true"></i>
                            </button>
                        </div>) : (<div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                            <button className={Style.prevbutton} style={{ background: "transparent" }} onClick={nextbutton}>
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </button>
                        </div>)}

                    </div>
                </div>

                <div className={Style.AchievementsMainDiv} ref={achievementsRef}>
                    <div style={{ padding: '15px', background: 'white' }}>
                        <div className={`${Style.AchievementsdivText} ${Style.headingtext}`}>
                            <h4>Recent Achievements</h4>
                        </div>
                        <div className={Style.Contentjustify}>
                            I have secured the third position in the yellow.ai Hackathon by proposing an innovative use case for our organization. We came up with an idea to develop a chatbot that would allow restaurants to donate their excess food to nearby non-profit organizations. The bot would collect all the necessary information about the food, owners, and other relevant details to facilitate the process. With the help of my teammates, we were able to achieve this accomplishment, and I am incredibly proud of our efforts. <a href="https://www.credential.net/0a51513b-b774-4d73-90d1-75a96b80603e" target="_blank" style={{ color: "tomato !important " }}><strong>View Certificate</strong></a>
                        </div>
                    </div>
                </div>

                <div className={Style.LicensesmainDiv} ref={licensesRef}>
                    <div style={{ padding: '15px', background: 'white' }}>
                        <div className={`${Style.AchievementsdivText} ${Style.headingtext}`}  >
                            <h4>Frequently got Licenses/Certifications</h4>
                        </div>
                        <div className={Style.Licensesmaindiv_map} >
                            {prevLicenseIndex === 0 ? (
                                <div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                    <button className={Style.prevbutton} style={{ background: "transparent" }} disabled onClick={preLicensesButton}>
                                        <i className="fa fa-arrow-circle-left" style={{ color: 'white', backgroundColor: 'transparent' }} aria-hidden="true"></i>
                                    </button>
                                </div>
                            ) : (
                                <div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                    <button className={Style.prevbutton} style={{ background: "transparent" }} onClick={preLicensesButton}>
                                        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                    </button>
                                </div>
                            )}
                            <div className={Style.Licensesmaindiv_map_Main_div}>
                                {AboutmeLicenses.slice(prevLicenseIndex, nextLicenseIndex).map((element, i) => (
                                    <div className={Style.LicensesmainDivitem} key={i}>

                                        <div style={{ width: '10%', alignItems: 'flex-start', display: 'flex' }}> <Image alt="MyImage" loading='lazy' width={500} height={500} src={element.logo} style={{ width: '100%', margin: '0px 0px' }} /></div>
                                        <div className={Style.LicensesmainDivitemcontent}>
                                            <div><h6>{element.tittle}</h6></div>
                                            <div><p className={Style.Contentjustify}>{element.description}</p></div>
                                            <button aria-label="viewProjectBtn" className={Style.viewProjectBtn} onClick={() => handleClickOpen(element.tittle)} >View Certificate</button>
                                        </div>
                                        <Dialog
                                            disablePortal
                                            sx={{ width: "100%" }}
                                            open={open[element.tittle] || false}
                                            onClose={() => handleClose(element.tittle)}
                                            maxWidth="xl"
                                        >
                                            <DialogTitle>{element.tittle}</DialogTitle>
                                            <DialogContent>
                                                <Image loading='lazy' src={element.certificate} onError={() => { element.certificate = "/Image/aboutPageImage.jpg" }} alt={element.tittle} width={950} height={550}></Image>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button aria-label="expirenceBTn" onClick={() => handleClose(element.tittle)}>Perfect!!!</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                ))}
                            </div>
                            {nextLicenseIndex == getAboutmeLicenses && nextLicenseIndex < AboutmeLicenses.length + OddLicense + 1 ? (<div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                <button className={Style.prevbutton} style={{ background: "transparent" }} disabled onClick={nextLicensesButton}>
                                    <i className="fa fa-arrow-circle-right" style={{ color: 'white' }} aria-hidden="true"></i>
                                </button>
                            </div>) : (<div className={Style.Flipkart_Content_Skills_div_arrow_left}>
                                <button className={Style.prevbutton} style={{ background: "transparent" }} onClick={nextLicensesButton}>
                                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MainPage