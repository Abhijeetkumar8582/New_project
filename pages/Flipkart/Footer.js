import React, { useCallback } from "react";
import Style from "/styles/Flipkart.module.css";
import Head from 'next/head';
function Footer() {
    const url = useCallback((event) => {
        window.open(event, "_blank");
    });
    return (
        <><Head>
            <title>Flipkart - Abhijeet</title>
        </Head>

            <div style={{ backgroundColor: '#2874f0' }}>
                <div className={Style.FooterBar_container}>
                    <div className={Style.FooterBar_container_sectionOne_div_one}>
                        <p className={Style.footer_font_text}>Check out my other Portfolio</p>
                    </div>
                    <div className={Style.FooterBar_container_sectionOne_div_two}>
                        <div>
                            <button className={Style.redirect_btn} onClick={() => redirect_user("/Flipkart/Home")}><p className={Style.footer_font_text}>Flipkart</p></button>
                        </div>
                        <div>
                            <button className={Style.redirect_btn} onClick={() => redirect_user("/Instagram/Home")}><p className={Style.footer_font_text}>Instagram</p></button>
                        </div>
                        <div>
                            <button className={Style.redirect_btn} onClick={() => redirect_user("/Introduction")}><p className={Style.footer_font_text}>My Design</p></button>
                        </div>
                        <div>
                            <button className={Style.redirect_btn} onClick={() => redirect_user('e')}> <p className={Style.footer_font_text}>Dynamic Portfolio(WIP)</p></button>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black',marginTop:'5px' }}>
                    <div
                        className={Style.fafaicongithub}
                        onClick={() => url("https://github.com/Abhijeetkumar8582")}
                    >
                        <i className="fa fa-github" aria-hidden="true" ></i> <p style={{ margin: '0' }}>Github</p>
                    </div>
                    <div
                        className={Style.fafaiconemail}
                        onClick={() => url("mailto:abhijeet122kumar@gmail.com")}
                    >
                        <i className="fa fa-envelope" aria-hidden="true" ></i> <p style={{ margin: '0' }}>Email</p>
                    </div>
                    <div
                        className={Style.fafaiconLinkedin}
                        onClick={() =>
                            url("https://www.linkedin.com/in/abhijeet-kumar-696a5a16a/")
                        }
                    >
                        <div><i className="fa fa-linkedin-square" aria-hidden="true" ></i></div>
                        <div> <p style={{  margin: '0' }}>linkedIn</p></div>
                    </div>
                    <div
                        className={Style.fafaiconinstagram}
                        onClick={() => url("https://www.instagram.com/daredevil8582/")}
                    >
                        <i className="fa fa-instagram" aria-hidden="true" ></i> <p style={{ margin: '0' }}>Instagram</p>
                    </div>
                    {/* </nav> */}
                </div>
                <div className={Style.FooterBar_container_two}>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className={Style.footer_font_text_other_text}>Handcrafted by Abhijeet kumar @2023</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;
