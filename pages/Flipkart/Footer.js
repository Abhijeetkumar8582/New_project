import React from 'react'
import Style from "/styles/Flipkart.module.css";
function Footer() {
    const url = (event) => {
        window.open(event, '_blank');
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#212121', display: 'flex', justifyContent: 'center', color: 'white' }}>
                <div className={Style.fafaicongithub} onClick={() => url("https://github.com/Abhijeetkumar8582")} >
                    <i className="fa fa-github" aria-hidden="true"></i> Github
                </div>
                <div className={Style.fafaiconemail} onClick={() => url("mailto:abhijeet122kumar@gmail.com")} >
                    <i className="fa fa-envelope" aria-hidden="true"></i> Email
                </div>
                <div className={Style.fafaiconLinkedin} onClick={() => url("https://www.linkedin.com/in/abhijeet-kumar-696a5a16a/")} >
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
                </div>
                <div className={Style.fafaiconisntagram} onClick={() => url("https://www.instagram.com/daredevil8582/")}  >
                    <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                </div>

            </nav>
        </>
    )
}

export default Footer