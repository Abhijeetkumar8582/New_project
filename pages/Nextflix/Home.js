import React, { useState } from "react";
import Style from "/styles/Netflix.module.css";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
    const accordionData = [
        {
            title: "What educational background do you have in this field?",
            content:
                "I have completed my B.Com degree and subsequently transitioned my career into this particular field. I am continuously engaging in learning opportunities and have plans for further studies to advance my knowledge in this domain.",
        },
        {
            title: "Are you familiar with Data Structures and Algorithms (DSA)?",
            content: `Yes, I have started learning DSA recently. Currently, I am focusing on understanding arrays and strings in-depth. I find it challenging and exciting to explore the various problem-solving techniques.`,
        },
        {
            title: "Have you won any awards or recognition for your work?",
            content:
                "Yes, I am proud to have secured the third position in the prestigious yellow.ai Hackathon. ",
        },
    ];
    const redirect = () => {
        router.push("/Nextflix/Main");
    }

    return (
        <>
            <div className={Style.MainDiv}>
                <div className={Style.MainPageSectionOne}>
                    {/* ...................................................................................................................................*/}
                    <div className={Style.NavbarHeadMain}>
                        <div style={{ display: "flex", alignItems: "center" }}>
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
                            <div className={Style.HeadingMainPage}>
                                {" "}
                                Welcome to the Gateway of Creative Entertainment!
                            </div>
                            <div className={Style.subHeadingMainPageOne}>
                                We believe that creativity knows no bounds.
                            </div>

                            <div className={Style.subHeadingMainPageTwo}>
                                I would love to connect with you, and if you're interested
                            </div>
                        </div>
                    </div>
                    <div className={Style.HeadingMainPageInputDiv}>
                        <div className={Style.HeadingMainPageInputSubDiv} style={{}}>
                            <input
                                className={Style.HeadingMainPageInputSubDivEmail}

                                placeholder="Email address"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: " 0px 10px 10px 0px",
                            }}
                        >
                            <button onClick={redirect} className={Style.emailIDEnteredbtn}>
                                {" "}
                                Get Started{" "}
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: "gray", height: "5px" }}></div>
                <div className={Style.MainPageSectionTwo}>
                    <div className={Style.MainPageSectionTwo_subdivOne}>
                        <h1 className={Style.MainPageSectionTwo_subdivOne_headingOne}>
                            User-Friendly Interface
                        </h1>
                        <h5 className={Style.MainPageSectionTwo_subdivOne_headingtwo}>
                            {" "}
                            Cross-platform synchronization ensures that your creative journey
                            remains uninterrupted.
                        </h5>
                    </div>
                    <div className={Style.MainPageSectionTwo_subdivtwo}>
                        <div style={{ maxWidth: "300px" }}>
                            <img
                                style={{ width: "100%" }}
                                src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif"
                            />
                        </div>
                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: "gray", height: "5px" }}></div>
                <div className={Style.MainPageSectionThree}>
                    <div className={Style.MainPageSectionThree_subdivone}>
                        <div style={{ maxWidth: "300px" }}>
                            <img
                                style={{ width: "100%" }}
                                src="https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif"
                            />
                        </div>
                    </div>
                    <div className={Style.MainPageSectionThree_subdivOne}>
                        <h1 className={Style.MainPageSectionThree_subdivOne_headingOne}>
                            {" "}
                            One Masterpiece at a Time
                        </h1>
                        <h5 className={Style.MainPageSectionThree_subdivOne_headingtwo}>
                            {" "}
                            Project Insight: Showcasing my unique creations and unraveling
                            your artistic journey!
                        </h5>
                    </div>
                </div>
                {/* ...................................................................................................................................*/}
                <div style={{ background: "gray", height: "5px" }}></div>
                <div className={Style.MainPageSectionFour}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "10px 0px",
                            color: "white",
                        }}
                    >
                        <h2 style={{ fontSize: "3rem", fontWeight: "900" }}>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div>
                        {accordionData.map((element, i) => (
                            <div style={{ marginBottom: "10px" }} key={i}>
                                <div className={Style.accordainSubDiv_title}>
                                    <h5>{element.title}</h5>
                                    <div>
                                        {openAccordionIndex === i ? (
                                            <i
                                                className="fa fa-times"
                                                onClick={() => setOpenAccordionIndex(-1)}
                                                aria-hidden="true"
                                            ></i>
                                        ) : (
                                            <i
                                                className="fa fa-plus"
                                                onClick={() => setOpenAccordionIndex(i)}
                                                aria-hidden="true"
                                            ></i>
                                        )}
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
                <div style={{ background: "gray", height: "5px" }}></div>
                <div className={Style.MainPageSectionFive}>
                    <div>
                        <h6>Handcrafted by Abhijeet kumar</h6>
                    </div>
                    <div>
                        <h6>Handcrafted by Abhijeet kumar</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
