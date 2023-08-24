import React, { useState } from "react";
import Style from "/styles/HomePage.module.css";
import Link from "next/link";

function Home() {
  const porfolio = [
    {
      image: '/Image/netflixUi.png',
      title: 'AbhiFlix',
      link: '/Nextflix/Home',
      description: 'I attempted to replicate the Netflix UI for my portfolio, and I\'ve included a video detailing my journey within this field.'
    },
    {
      image: '/Image/flipkartUi.png',
      title: 'AbhiKart',
      link: '/Flipkart/Home',
      description: 'I\'m designing my portfolio as a Flipkart-inspired UI, also developing a search algorithm for easy inquiries about me. Exciting things coming soon!'
    },
    {
      image: '/Image/simpleUi.png',
      title: 'My Design',
      link: '/Introduction',
      description: 'This marks the debut of my portfolio website, with exciting plans for the future, including the development of an AI chatbot for interactive engagement. Stay tuned!'
    },
    {
      image: 'https://i0.wp.com/dianisa.com/wp-content/uploads/2023/02/Sejarah-Coming-Soon.jpg?resize=950%2C550&ssl=1',
      title: 'Airbnb',
      link: '',
      description: 'I am working on designing a user interface similar to Airbnb\'s, and I\'m also developing algorithms to enhance its interactivity.'
    },
    {
      image: 'https://i0.wp.com/dianisa.com/wp-content/uploads/2023/02/Sejarah-Coming-Soon.jpg?resize=950%2C550&ssl=1',
      title: 'Godzilla',
      link: '',
      description: 'As a huge Godzilla fan, I\'m excited to craft a uniquely creative UI inspired by the mighty monster!'
    }
  ]
  return (
    <>
      <div className={Style.introPageMainDiv}>
        <div className={Style.introPageMainDiv_one}>

          <div><h1 className={Style.text}>Hy! I Am </h1></div>
          <div><h1 className={Style.text_name}>Abhijeet kumar</h1></div>
          <div><p className={Style}>Frontend developer delving into backend development using Node.js and Python as well.</p></div>
        </div>
        <div className={Style.introPageMainDiv_two}>
          <div style={{ maxHeight: '400px', maxWidth: '400px', display: 'flex', justifyContent: "center" }}>
            <img style={{ width: '100%', height: '100%' }} src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg" />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f0f8ff" }}>
        <div className={Style.Portfoliotext}>
          <div><h4 className={Style.Portfoliotext_text}>How would you like to view my portfolio website</h4></div>
        </div>
        <div className={Style.Portfolio_Div}>
          {porfolio.map((element) => (
            <Link href={element.link} className={Style.LinkWithoutUnderline} >
              <div className={Style.Container_two_subdiv}>
                <div className={Style.Container_two_subdiv_imageDiv}>
                  <img className={Style.Container_two_subdiv_imageDiv_image} src={element.image} />
                </div>
                <div className={Style.Container_two_subdiv_heading} ><h4>{element.title}</h4></div>
                <div className={Style.Container_two_subdiv_paragraph}><p>{element.description}</p></div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </>
  )
}

export default Home