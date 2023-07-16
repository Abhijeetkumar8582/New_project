import React, { useState } from "react";
import Style from "/styles/Flipkart.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


function Home() {
  const router = useRouter();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: ' 5px solid rgba(0,0,0,.07)',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => {
        setUserName(`${data.results[0].name.first} ${data.results[0].name.last}`)
        setAvatar(data.results[0].picture.medium)
      })
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const [getAvatar, setAvatar] = useState('')
  const [getUserName, setUserName] = useState('')
  const [error, throwError] = useState(false)


  const generateName = () => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => {
        setUserName(`${data.results[0].name.first} ${data.results[0].name.last}`)
        setAvatar(data.results[0].picture.medium)
      })
  }

  const UserNameInput = (e) => {
    setUserName(e.target.value)
  }

  const handleLogin = () => {
    if (getUserName.length === 0) {
      throwError(true)
    } else {
      router.push("/Flipkart/MainPage")
    }
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={Style.flipkartBox}>
        <div className={Style.flipkartBox_one}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 className={Style.flipkarText}>Abhijeet Kumar</h3>
            <div className={Style.ImageLogo_div}>
              <Image
                className={Style.intro_images}
                src="/Image/AbhiFlipkart.png"
                width={500}
                height={500}
                alt="portfolio_image"
              ></Image>
            </div>
          </div>
          <div>
            <h4> Explore a diverse range of my work, highlighting my skills, projects, and achievements.</h4>
          </div>
          <div className={Style.givenName}>
            <p>Let's know each other</p>
          </div>
          <div className={Style.textInputDIv} >
            <TextField id="standard-basic"
              style={{ width: '100%' }}
              label={error ? "Please enter your Name or Generate one" : "Name"}
              value={getUserName}
              error={error}
              onChange={(e) => UserNameInput(e)}
              required
              variant="standard" />
          </div>
          <div className={Style.textInputDIv}>
            <TextField
              id="standard-basic"
              style={{ width: '100%' }}
              label="Email Address optional"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <input className={Style.userConcern} type='checkbox' />
              <p style={{ display: 'contents', fontSize: '12px' }}>Keep Name for all the portfolio</p>
            </div>
            <div>
              <button className={Style.forgetNameBTn} onClick={handleOpen} ><p> <span style={{ color: 'red', fontWeight: '500', fontSize: '12px' }} >Forget Name?</span></p></button>
            </div>
          </div>
          <div>
            <button className={`${Style.custombtn} ${Style.btn2}`} onClick={handleLogin}>Login</button>
          </div>
          <div>
            <p>Don't know Name ? <button className={Style.forgetNameBTn} onClick={handleOpen} ><p> <span style={{ color: 'red', fontWeight: '500', fontSize: '15px' }} >Generate One</span></p></button></p>
          </div>
        </div>

        <div className={Style.flipkartBox_two}>
          <div style={{ margin: '50px', color: 'white', }}>
            <p >I invite you to explore my portfolio and share any feedback or suggestions you may have. Your input is valuable in helping me improve it!</p>
          </div>
          <div className={Style.flipkartBox_two_Div_image} >
            <img className={Style.flipkartBox_two_image} src="/flipkart/Flipkart_div_image.webp" style={{ width: '100%' }} />
          </div>
        </div>
      </div>



      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className={Style.avatar}>
                {/* <!-- Avatar image --> */}
                <img className={Style.avatar__image} src={getAvatar} />
              </div>
              <div>
                <h4>{getUserName}</h4>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <button className={Style.generateAnotherOne} onClick={generateName}>Another One</button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
