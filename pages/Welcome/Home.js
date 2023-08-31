import React, { useEffect, useState } from "react";
import Style from "/styles/HomePage.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
function Home() {

  const porfolio = [
    {
      image: "/Image/netflixUi.webp",
      title: "AbhiFlix",
      link: "/Nextflix/Home",
      description:
        "I attempted to replicate the Netflix UI for my portfolio, and I've included a video detailing my journey within this field.",
    },
    {
      image: "/Image/flipkartUi.webp",
      title: "AbhiKart",
      link: "/Flipkart/Home",
      description:
        "I'm designing my portfolio as a Flipkart-inspired UI, also developing a search algorithm for easy inquiries about me. Exciting things coming soon!",
    },
    {
      image: "/Image/simpleUi.webp",
      title: "My Design",
      link: "/Introduction",
      description:
        "This marks the debut of my portfolio website, with exciting plans for the future, including the development of an AI chatbot for interactive engagement. Stay tuned!",
    },
    {
      image:
        "https://i0.wp.com/dianisa.com/wp-content/uploads/2023/02/Sejarah-Coming-Soon.jpg?resize=950%2C550&ssl=1",
      title: "Airbnb",
      link: "",
      description:
        "I am working on designing a user interface similar to Airbnb's, and I'm also developing algorithms to enhance its interactivity.",
    },
    {
      image:
        "https://i0.wp.com/dianisa.com/wp-content/uploads/2023/02/Sejarah-Coming-Soon.jpg?resize=950%2C550&ssl=1",
      title: "Godzilla",
      link: "",
      description:
        "As a huge Godzilla fan, I'm excited to craft a uniquely creative UI inspired by the mighty monster!",
    },
  ];
  const [alertOpen, alertsetOpen] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem('MainPage_alert')) {
      alertsetOpen(false);
    }
  })
  const alertBTn = () => {
    sessionStorage.setItem('MainPage_alert', 'Completed');
    alertsetOpen(false);

  }

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>

      <meta property="og:title" content="ABHI | Home" />
      <meta
        property="og:description"
        content="As a passionate frontend developer, I am always eager to explore the latest technologies and stay ahead of the curve. With a deep understanding of the frontend"
      />
      <meta property="og:image" content="/mainPage.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:url" content="https://your-website-url.com" />
      <meta property="og:type" content="website" />

      {alertOpen &&
        <Alert className={Style.alertCss} onClose={() => alertBTn()}>Welcome to my Portfolio website!👨‍💻 Expect some adorable alerts from my furry friends🐶 </Alert>
      }
      <div className={Style.introPageMainDiv}>
        <div className={Style.introPageMainDiv_one}>
          <div>
            <h1 className={Style.text}>Hy! I Am </h1>
          </div>
          <div>
            <h1 className={Style.text_name}>Abhijeet kumar</h1>
          </div>
          <div>
            <p className={Style}>
              Frontend developer delving into backend development using Node.js
              and Python as well.
            </p>
          </div>
        </div>
        <div className={Style.introPageMainDiv_two}>
          <div
            style={{
              maxHeight: "400px",
              maxWidth: "450px",
              display: "flex",
              justifyContent: "flex-end",
              position: 'relative'
            }}
          >
            <img
              style={{ width: "100%", height: "100%", mixBlendMode: 'darken' }}
              alt="Abhijeet Kumar"
              src="/Image/Abhijeet_kumar.png"
            />
            <img
              style={{
                width: "100%", height: "100%", mixBlendMode: 'darken', position: 'absolute',
                left: '0',
                marginLeft: '-308px',
                marginTop: "-195px"
              }}
              alt="Abhijeet Kumar"
              src="/Image/donut_3d_shape.png"
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f0f8ff" }}>
        <div className={Style.Portfoliotext}>
          <div>
            <h4 className={Style.Portfoliotext_text}>
              How would you like to view my portfolio website
            </h4>
          </div>
        </div>
        <div className={Style.Portfolio_Div}>
          {porfolio.map((element, i) => (
            <Link
              href={element.link}
              className={Style.LinkWithoutUnderline}
              key={i}
            >
              <div className={Style.Container_two_subdiv}>
                <div className={Style.Container_two_subdiv_imageDiv}>
                  <Image
                    width={250}
                    height={150}
                    className={Style.Container_two_subdiv_imageDiv_image}
                    alt={element.image}
                    src={element.image}
                  />
                </div>
                <div className={Style.Container_two_subdiv_heading}>
                  <h4>{element.title}</h4>
                </div>
                <div className={Style.Container_two_subdiv_paragraph}>
                  <p>{element.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
