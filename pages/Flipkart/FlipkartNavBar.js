import React from 'react';
import Style from "/styles/Flipkart.module.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function FlipkartNavBar() {
    return (
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#2874f0', color: 'white' }}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Abhijeet Kumar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
               
                <li className="nav-item">
                    <div style={{ width: '550px' }}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Welcome to My portfolio"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                </li>
               
            </ul>
        </div>
        <button className={`${Style.custombtn} ${Style.btn12}`}><span>Click!</span><span><i className="fa fa-cloud-download" aria-hidden="true"></i>Read More</span></button>
    </div>
</nav>

        </>
    )
}

export default FlipkartNavBar