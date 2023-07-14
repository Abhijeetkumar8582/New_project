import React from 'react'
import Style from "/styles/Flipkart.module.css";
function Footer() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#212121', display: 'flex', justifyContent: 'center', color: 'white' }}>
                <div className={Style.fafaicongithub}>
                    <i className="fa fa-github" aria-hidden="true"></i> Github
                </div>
                <div className={Style.fafaiconemail}>
                    <i className="fa fa-envelope" aria-hidden="true"></i> Email
                </div>
                <div className={Style.fafaiconisntagram} >
                    <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                </div>

            </nav>
        </>
    )
}

export default Footer