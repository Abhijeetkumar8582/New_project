import React, { useState } from 'react'
import Style from "/styles/Netflix.module.css";
import TextField from '@mui/material/TextField';

function Home() {

    const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
    const accordionData = [
        {
            title: 'Accordion 1',
            content: 'Content for Accordion 1',
        },
        {
            title: 'Accordion 2',
            content: 'Content for Accordion 2',
        },
        {
            title: 'Accordion 3',
            content: 'Content for Accordion 3',
        },
    ];


    return (
        <>
            <div className={Style.MainDiv}>
                <div className={Style.MainPageSectionOne} >

                    {/* ...................................................................................................................................*/}
                    <div className={Style.NavbarHeadMain} >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 className={Style.AbhiFlexText}>Abhi</h5>
                        </div>
                        <div style={{ display: "flex" }}>
                            <select className={Style.selectLanguage}>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button className={Style.siginBtn}>Sign In</button>
                        </div>
                    </div>
                    {/* ...................................................................................................................................*/}
                    <div>
                        <div className={Style.MainHeadingDiv}>
                            <div className={Style.HeadingMainPage}> Unlimited movies, TV shows and more</div>
                            <div className={Style.subHeadingMainPageOne}>Watch anywhere. Cancel anytime.</div>

                            <div className={Style.subHeadingMainPageTwo}>Ready to watch? Enter your email to create or restart your membership.</div>
                        </div>
                    </div>
                    <div className={Style.HeadingMainPageInputDiv}>
                        <div className={Style.HeadingMainPageInputSubDiv} style={{}}>
                            <input className={Style.HeadingMainPageInputSubDivEmail} placeholder="Email address" />
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center', margin: ' 0px 10px 10px 0px' }}>
                            <button className={Style.emailIDEnteredbtn}> Get Started</button>
                        </div>
                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: 'gray', height: '5px' }}></div>
                <div className={Style.MainPageSectionTwo} >
                    <div className={Style.MainPageSectionTwo_subdivOne}  >
                        <h1 className={Style.MainPageSectionTwo_subdivOne_headingOne} >Enjoy on your TV</h1>
                        <h5 className={Style.MainPageSectionTwo_subdivOne_headingtwo}>  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
                    </div>
                    <div className={Style.MainPageSectionTwo_subdivtwo} >
                        <div style={{ maxWidth: '300px' }}>
                            <img style={{ width: '100%' }} src='https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif' />
                        </div>
                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: 'gray', height: '5px' }}></div>
                <div className={Style.MainPageSectionThree} >
                    <div className={Style.MainPageSectionThree_subdivone} >
                        <div style={{ maxWidth: '300px' }}>
                            <img style={{ width: '100%' }} src='https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif' />
                        </div>
                    </div>
                    <div className={Style.MainPageSectionThree_subdivOne}  >
                        <h1 className={Style.MainPageSectionThree_subdivOne_headingOne} >Download your shows to watch offline</h1>
                        <h5 className={Style.MainPageSectionThree_subdivOne_headingtwo}>  Save your favourites easily and always have something to watch.</h5>
                    </div>

                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: 'gray', height: '5px' }}></div>
                <div className={Style.MainPageSectionFour} >
                    <div style={{ display: 'flex', justifyContent: 'center', margin: "10px 0px", color: "white" }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900' }}>Frequently Asked Questions</h2>
                    </div>
                    <div>
                        {accordionData.map((element, i) => (
                            <div style={{ marginBottom: '10px' }} key={i}>
                                <div className={Style.accordainSubDiv_title} >
                                    <h3>{element.title}</h3>
                                    <div>
                                        {openAccordionIndex === i
                                            ? <i className="fa fa-times" onClick={() => setOpenAccordionIndex(-1)} aria-hidden="true"></i>
                                            : <i className="fa fa-plus" onClick={() => setOpenAccordionIndex(i)} aria-hidden="true"></i>}
                                    </div>
                                </div>
                                {openAccordionIndex === i ? (
                                    <div className={Style.accordainSubDiv}>
                                        <h6>{element.content}</h6>
                                    </div>
                                ) : null}
                            </div>
                        ))}

                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: 'gray', height: '5px' }}></div>
                <div className={Style.MainPageSectionFive} >
                    <div>
                        <h6>Handcrafted by Abhijeet kumar</h6>
                    </div>
                    <div>
                        <h6>Handcrafted by Abhijeet kumar</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home