import React, { useEffect, useState } from "react";
import Style from "/styles/HomePage.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Alert from "@mui/material/Alert";
import AOS from 'aos';
function Home() {
  const porfolio = [
    {
      image: "/Image/netflixUi.webp",
      title: "Netflix - UI",
      link: "/Nextflix/Home",
      description:
        "I attempted to replicate the Netflix UI for my portfolio, and I've included a video detailing my journey within this field.",
    },
    {
      image: "/Image/flipkartUi.webp",
      title: "Flipkart - UI",
      link: "/Flipkart/Home",
      description:
        "I'm designing my portfolio as a Flipkart-inspired UI, also developing a search algorithm for easy inquiries about me. Exciting things coming soon!",
    },
    {
      image: "/Image/simpleUi.webp",
      title: "Modern design",
      link: "/Introduction",
      description:
        "This marks the debut of my portfolio website, with exciting plans for the future, including the development of an AI chatbot for interactive engagement.",
    },
    {
      image: "/Image/Instagram_UI.webp",
      title: "Instagram - UI",
      link: "/Instagram/Home",
      description:
        "Engaged in the art of UI design, I'm crafting visually appealing and interactive experiences!",
    },
    {
      image:
        "https://i0.wp.com/dianisa.com/wp-content/uploads/2023/02/Sejarah-Coming-Soon.jpg?resize=950%2C550&ssl=1",
      title: "Dynamic portfolio",
      link: "/Dynamic_Portfolio/Home",
      description:
        "Creating a dynamic portfolio with a fresh design, showcasing my data uniquely.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 })
})

  const [alertOpen, alertsetOpen] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("MainPage_alert")) {
      alertsetOpen(false);
    }
  });
  const alertBTn = () => {
    sessionStorage.setItem("MainPage_alert", "Completed");
    alertsetOpen(false);
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta property="og:title" content="Abhijeet Kumar" />
        <meta name="description" content="🚀 Abhijeet Kumar: Crafting digital experiences with a blend of frontend finesse and backend wizardry. Join me on a journey through the world of Node.js development! 💻✨"/>
        <meta property="og:description" content="🚀 Abhijeet Kumar: Crafting digital experiences with a blend of frontend finesse and backend wizardry. Join me on a journey through the world of Node.js development! 💻✨"/>
        <meta property="og:image" content="/Image/mainPageImage.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://abhijeetkumar-developer.netlify.app/"/>
        <meta property="og:type" content="https://abhijeetkumar-developer.netlify.app/"/>
        <meta property="og:site_name" content="ABHI" />
      </Head>

      {alertOpen && (
        <div data-aos="fade-down">
        <Alert
          sx={{
            bgcolor: "black",
            color: "white",
          }}
          onClose={() => alertBTn()}
        >
          Welcome to my Portfolio website!👨‍💻 Expect some adorable alerts from my
          furry friends🐶{" "}
        </Alert>
        </div>
      )}
      <div data-aos="fade-right">
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
              position: "relative",
            }}
          >
            <link
              rel="preload"
              as="image"
              href="/Image/Abhijeet_kumar.webp"
              imageSrcSet="/Image/Abhijeet_kumar.webp 1x"
            />

            <Image
              width={500}
              height={500}
              priority
              style={{ width: "100%", height: "100%", mixBlendMode: "darken" }}
              alt="Abhijeet Kumar"
              decoding="async"
              src="/Image/Abhijeet_kumar.webp"
            />
            <link
              rel="preload"
              as="image"
              href="/Image/donut_3d_shape.webp"
              imageSrcSet="/Image/donut_3d_shape.webp 1x"
            />
            <Image
              width={500}
              height={500}
              priority
              decoding="async"
              className={Style.donut_3d_shape}
              style={{
                width: "100%",
                height: "100%",
                mixBlendMode: "darken",
                position: "absolute",
                left: "0",
                marginLeft: "-308px",
                marginTop: "-195px",
              }}
              alt="Abhijeet Kumar"
              src="/Image/donut_3d_shape.webp"
            />
          </div>
        </div>
        
      </div>
      </div>
      <div style={{ backgroundColor: "#f0f8ff" }}>
        <div className={Style.Portfoliotext}>
        <div data-aos="fade-up">
          <div>
            <h4 className={Style.Portfoliotext_text}>
              How would you like to view my portfolio website
            </h4>
          </div>
          </div>
        </div>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

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
      </div>
    </>
  );
}

export default Home;
