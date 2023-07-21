import Style from "/styles/About.module.css"
import * as React from 'react';
import { useEffect } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import expItem from '../Json/Expirence.json'
import Head from 'next/head';
import AOS from 'aos';
import Image from 'next/image'
import NavBar from "./NavBar";
import Footer from "./Footer";



function Experience() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    })
    return (
        <>
            <Head>
                <title>ABHI | Experience</title>
                <meta name="description"
                    content="Discover the professional experiences of an eager learner who's always looking to grow.... "
                />
            </Head>
            <NavBar />
            <div data-aos="zoom-in">
                <h1 className={Style.heading} >Where I’ve Worked</h1>
            </div>
            <Timeline position="alternate">

                {expItem.map((element, index) =>

                    index % 2 === 0 ? (

                        <TimelineItem key={index}>

                            <TimelineSeparator key={index}>
                                <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                                <TimelineDot color="success" variant="outlined">
                                    <Image src={element.logo} loading='lazy' alt={element.logo} width={30} height={30} style={{ borderRadius: "20px" }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <div className={Style.box} >

                                    <TimelineContent sx={{ py: '12px', px: 2 }}>

                                        <Typography variant="h6" className={Style.desginstion} component="span">
                                            {element.desginstion}
                                        </Typography>
                                        <h5 className={Style.jobtype}>{element.jobtype}</h5>
                                        <p className={Style.jobtype}>{element.timeline}</p>
                                        <Typography className={Style.jobrole}>{element.jobRole}</Typography>

                                    </TimelineContent>
                                </div>
                            </div>
                        </TimelineItem>)
                        : (

                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    <TimelineDot color="primary" variant="outlined">
                                        <Image src={element.logo} loading='lazy' alt={element.logo} width={30} height={30} style={{ borderRadius: "20px" }} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <div data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <div className={Style.box} >
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" className={Style.desginstion} component="span">
                                                {element.desginstion}
                                            </Typography>
                                            <h5 className={Style.jobtype}>{element.jobtype}</h5>
                                            <p className={Style.jobtype}>{element.timeline}</p>
                                            <Typography className={Style.jobrole}>{element.jobRole}

                                            </Typography>
                                        </TimelineContent>
                                    </div>
                                </div>
                            </TimelineItem>)


                )}
            </Timeline>
            <Footer />
        </>
    )
}

export default Experience;

