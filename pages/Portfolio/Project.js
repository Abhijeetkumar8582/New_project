import { useEffect } from 'react'
import Style from 'styles/project.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import projects from '../Json/Projects.json'
import Head from 'next/head';
import AOS from 'aos';
import Image from 'next/image'

import NavBar from './NavBar';




function Project() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    })
    const handleClick = (event) => {
        window.open(event, '_blank');
    }
    return (
        <>
            <Head>
                <title >Abhijeet Portfolio</title>
                <meta name="description"
                    content="Skilled and innovative developer who's passionate about making life easier. Explore my portfolio of projects, including Omnipexel, Newsapp, and Chartext, and discover.... "
                />
            </Head>
            <NavBar />
            <div data-aos="zoom-in">
                <h1 className='heading'>Some Things I’ve Built</h1>
            </div>
            <div className='' style={{display:'flex',overflowX:'scroll',gap:'20px',margin:'0rem 1rem'}}>
                {projects.map((element, index) => (
                    <div className='' key={index}>
                        <div data-aos="zoom-in-up">
                            <div class="Project_card">
                                <div class="Project_card_header">
                                    <Image
                                        component="img"
                                        style={{ width: '100%', borderRadius: '0px' }}
                                        src={element.image}
                                        width={400}
                                        loading='lazy'
                                        height={100}
                                        alt={element.image}
                                    /></div>
                                <div class="Project_card_info">
                                    <p class="Project_card_title">{element.title}</p>
                                    <p className='product_description'> {element.description}</p>
                                </div>
                                <div class="Project_card_footer">
                                    <p class="Project_card_tag">#{element.code} </p>
                                    <button type="button" aria-label={`View Project${index}`} onClick={() => handleClick(element.button)} class="action">View Project </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Project