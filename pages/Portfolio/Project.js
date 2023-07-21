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
import Footer from './Footer';
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
                <title>ABHI | Project</title>
                <meta name="description"
                    content="Skilled and innovative developer who's passionate about making life easier. Explore my portfolio of projects, including Omnipexel, Newsapp, and Chartext, and discover.... "
                />
            </Head>
            <NavBar />
            <div data-aos="zoom-in">
                <h1 className={Style.heading}>Some Things I’ve Built</h1>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                {projects.map((element, index) => (
                    <div className='col-md-4 my-4 mx-5' key={index}>
                        <div data-aos="zoom-in-up">
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <Image
                                        component="img"
                                        style={{ maxWidth: '400px', width: '100%' }}
                                        src={element.image}
                                        width={400}
                                        loading='lazy'
                                        height={210}
                                        alt={element.image}
                                        srcSet={`${element.image}?w=600&quality=60 600w,
                                         ${element.image}?w=400&quality=60 400w,
                                         ${element.image}?w=200&quality=60 200w`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {element.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {element.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>{element.code}</strong>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" onClick={() => handleClick(element.button)} color="primary">
                                        View Project
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Project