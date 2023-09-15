import React, { useState, useCallback, useEffect } from "react";
import Style from "styles/Instagram.module.css";
import Avatar from "@mui/material/Avatar";
import AboutmeSkills from "../Json/AboutmeSkills.json";
import AboutmeLicenses from "../Json/AboutmeLicenses.json";
import AboutmeProject from '../Json/Projects.json';
import AboutmeExpirence from '../Json/Expirence.json';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Image from "next/image";
import TerminalIcon from '@mui/icons-material/Terminal';

function Home() {
  const [prevbuttonIndex, setprevbuttonIndex] = useState(0);
  const initialNextbuttonIndex = AboutmeSkills.length >= 10 ? 9 : AboutmeSkills.length;
  const indexAdd = AboutmeSkills.length % 2 == 0 ? 2 : 3;
  const [nextbuttonIndex, setnextbuttonIndex] = useState(initialNextbuttonIndex);
  const prevbutton = () => {
    if (prevbuttonIndex !== 0) {
      setnextbuttonIndex(nextbuttonIndex - indexAdd);
      setprevbuttonIndex(prevbuttonIndex - indexAdd);
    }
  };
  const nextbutton = () => {
    if (nextbuttonIndex !== AboutmeSkills.length && nextbuttonIndex <= AboutmeSkills.length) {
      setprevbuttonIndex(prevbuttonIndex + indexAdd);
      setnextbuttonIndex(nextbuttonIndex + indexAdd);
    }

  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const SideNavBar_array = [
    {
      fafa: "fa fa-home fa-1x",
      title: "Home",
    },
    {
      fafa: "fa fa-search fa-1x",
      title: "Search",
    },
    {
      fafa: "fa fa-compass fa-1x",
      title: "Explore",
    },
    {
      fafa: "fa fa-commenting fa-1x",
      title: "Messages",
    },
    {
      fafa: "fa fa-bell fa-1x",
      title: "Notifications",
    },
    {
      fafa: "fa fa-user fa-1x",
      title: "Profile",
    },
  ];
  const [profileavatarSize, setprofileavatarSize] = useState(150)
  const [skillAvatar, setskillAvatar] = useState(150)
  const [open, setOpen] = useState({});
  const handleClickOpen = useCallback((tittle) => {
    setOpen({ ...open, [tittle]: true });

  }, [setOpen]);

  const handleClose = useCallback((tittle) => {
    setOpen({ ...open, [tittle]: false });
    var card_css_hover = document.querySelectorAll('.card')
    card_css_hover.forEach(function (card) {
      card.classList.remove('hover')
    })
  }, [setOpen]);

  const handleClick = (event) => {
    window.open(event, '_blank');
  }

  const [screenDimensions, setScreenDimensions] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  const handleResize = () => {
    setScreenDimensions({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      setScreenDimensions({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {

    if (screenDimensions.screenWidth < 769) {
      setprofileavatarSize(50)
      setskillAvatar(40)
    } else if (screenDimensions.screenWidth > 769 && screenDimensions.screenWidth < 1080) {
      setprofileavatarSize(80)
      setskillAvatar(50)
    }
    else if (screenDimensions.screenWidth > 1080 && screenDimensions.screenWidth < 1250) {
      setprofileavatarSize(90)
      setskillAvatar(60)
    }
    else {
      setprofileavatarSize(150)
      setskillAvatar(70)
    }
  }, [screenDimensions.screenWidth, setnextbuttonIndex]);
  return (
    <>
      <div className={Style.Instragram_Main_Div}>
        <div className={Style.Instragram_Div_Side_NavBar}>
          <div className={Style.Instragram_Div_Side_NavBar_heading}>
            <div>
              <h3 className={Style.Instragram_Div_Side_NavBar_instagram_title}>Instagram</h3>
              <i
                className={`${"fa fa-instagram"} ${Style.Instragram_Div_Side_NavBar_instagram_icon}`}
                aria-hidden="true"
              ></i>
            </div>
            <div className={Style.Instragram_Div_Side_NavBar_subHeading}>
              {SideNavBar_array.map((element, i) => (
                <div
                  className={Style.Instragram_Div_Side_NavBar_subHeading_list}
                  key={i}
                >
                  <i className={`${element.fafa} ${Style.fafaIcon}`} aria-hidden="true"></i>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h5 className={Style.Instragram_Div_Side_NavBar_heading_title}>{element.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div className={Style.Instragram_Div_Side_NavBar_Menu_title}>
              <i className={`${"fa fa-bars"} ${Style.Instragram_Div_Side_NavBar_Menu_icon}`} aria-hidden="true"></i>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h6 className={Style.Instragram_Div_Side_NavBar_instagram_menu_Section}>Menu</h6>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.Instragram_Content_Main_div}>
          <div className={Style.Instragram_Content_Intro_section}>
            <div className={Style.Instragram_Intro_section_image}>
              <Avatar
                alt="Remy Sharp"
                src="/Image/Abhijeet_kumar_insta_img.webp"
                sx={{ width: profileavatarSize, height: profileavatarSize }}

              />
            </div>
            <div className={Style.Instragram_Content_username_Section_Main_div}>
              <div className={Style.Instragram_Content_username_Section}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h5>daredevil8582</h5>
                </div>
                <div>
                  <button className={Style.edit_profile_button}>Edit Profile</button>
                </div>
                <div>
                  <button className={Style.edit_profile_button}>view archieve</button>
                </div>
                <div className={Style.Setting_edit_profile_button}>
                  <i className="fa fa-cog fa-1x" aria-hidden="true"></i>
                </div>
              </div>
              <div className={Style.Instragram_Content_Post_Section}>
                <div>
                  <h6 className={Style.mobile_text}>{AboutmeSkills.length} Skills</h6>
                </div>
                <div>
                  <h6 className={Style.mobile_text}>{AboutmeLicenses.length} Certifications</h6>
                </div>
                <div>
                  <h6 className={Style.mobile_text}> {AboutmeProject.length} Projects</h6>
                </div>
              </div>
              <div>
                <h6 className={`${Style.mobile_text} ${Style.abhijeetkumarText}`}>Abhijeet kumar</h6>
              </div>
              <div className={Style.Instagram_status}>
                <h6 className={Style.mobile_text}>Coding enthusiast 🚀 | Constantly learning and evolving 💡 | Turning pixels into beautiful experiences ✨</h6 > #FrontendDevLife #CodePassion #AlwaysLearning  </div>
            </div>
          </div>

          <div className={Style.Instragram_Content_Skills_div_container}>
            <div className={Style.Instragram_Content_Skills_div_arrow_left}>
              {prevbuttonIndex === 0 ? (<button disabled className={Style.nextbutton} onClick={nextbutton}>
                <i
                  className="fa fa-arrow-circle-left"
                  style={{ color: 'black' }}
                  aria-hidden="true"
                ></i>
              </button>) : (
                <button className={Style.prevbutton} onClick={prevbutton}>
                  <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </button>
              )}
            </div>
            <div className={Style.Instragram_Content_Skills_div}>
              {AboutmeSkills.slice(prevbuttonIndex, nextbuttonIndex).map(
                (element, i) => (
                  <div
                    className={Style.Instragram_Content_Skills_avatar}
                    key={i}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={element.logo}
                      style={{ border: '1px solid gray', padding: '3px' }}
                      sx={{ width: skillAvatar, height: skillAvatar }}
                    />
                    <h6>{element.skills}</h6>
                  </div>
                )
              )}
              <div className={Style.Instragram_Content_Skills_avatar} >
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal66RNJGRaNvsBcwWGY8S9rZO5UPXXpAEwg&usqp=CAU"
                  style={{ border: '1px solid gray', padding: '3px', width: '100%' }}
                  sx={{ width: skillAvatar, height: skillAvatar }}
                />
                <h6>Add skills</h6>
              </div>
            </div>
            {nextbuttonIndex > 8 ? (
              <div className={Style.Instragram_Content_Skills_div_arrow_left}>
                {nextbuttonIndex >= AboutmeSkills.length ? (<button disabled className={Style.nextbutton} onClick={nextbutton}>
                  <i
                    className="fa fa-arrow-circle-right"
                    style={{ color: 'black' }}
                    aria-hidden="true"
                  ></i>
                </button>) : (
                  <button className={Style.nextbutton} onClick={nextbutton}>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                )}
              </div>
            ) : null}

          </div>

          <div className={Style.Instragram_Content_Major_div}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'center' }}>
                  <TabList onChange={handleChange} textColor="inherit"
                    indicatorColor="none" aria-label="lab API tabs example">
                    <Tab className={Style.Instragram_Content_Major_div_item} label={<div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><i className="fa fa-tasks" aria-hidden="true"></i>{' Projects'}</div>} value="1" style={{ color: 'white' }} />
                    <Tab className={Style.Instragram_Content_Major_div_item} label={<div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><i className="fa fa-align-justify" aria-hidden="true"></i>{' Experience'}</div>} value="2" />
                    <Tab className={Style.Instragram_Content_Major_div_item} label={<div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><i className="fa fa-certificate" aria-hidden="true"></i>{' Certifications'}</div>} value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className={Style.expirence_Product_card_list} >
                    {AboutmeProject.map((element, i) => (
                      <div className={Style.expirence_card} key={i}>
                        <div className={Style.expirence_card_image}>
                          <img src={element.image} style={{ width: '100%' }} />
                        </div>
                        <p className={Style.expirence_card_title}>{element.title}</p>
                        <p className={Style.expirence_card_body}>
                          {element.description}       </p>
                        <p className={Style.expirence_card_footer}>{element.code}</p>
                        <button className={Style.viewProject_btn} onClick={() => handleClick(element.button)} > view</button>
                      </div>
                    ))}

                  </div>
                </TabPanel>


                <TabPanel value="2">
                  <div className={Style.expirence_card_list}>
                    {AboutmeExpirence.map((element, i) => (
                      <div className={Style.card} key={i}>
                        <div className={Style.header}>
                          <div>
                            <h4 className={Style.title}>
                              {element.desginstion}
                            </h4>
                            <p className={Style.name}>{element.jobtype}</p>
                            <p className={Style.name}>{element.timeline}</p>
                          </div>
                          <span className={Style.image}>
                            <img style={{ width: '100%' }} src={element.logo} />
                          </span>
                        </div>
                        <p className={Style.description}>
                          {element.jobRole}
                        </p>
                      </div>
                    ))}

                  </div>
                </TabPanel>

                <TabPanel value="3">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {AboutmeLicenses.map((element, i) => (
                      <div className={Style.AboutmeLicenses_div} key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <p className={Style.AboutmeLicenses_div_heading}>{element.tittle}</p>
                          <Avatar alt="Remy Sharp" src={element.logo} />
                        </div>
                        <p className={Style.AboutmeLicenses_div_description}>{element.description}</p>
                        <button className={Style.AboutmeLicenses_div_button} onClick={() => handleClickOpen(element.tittle)}>View Certificate</button>

                        <Dialog
                          disablePortal
                          sx={{ width: "100%", background: 'black' }}
                          open={open[element.tittle] || false}
                          onClose={() => handleClose(element.tittle)}
                          maxWidth="xl"
                        >
                          <DialogContent>
                            <div className={Style.DialogContent_box} >
                              <div className={Style.DialogContent_box_image} >
                                <Image src={element.certificate} onError={() => { element.certificate = "/Image/aboutPageImage.jpg" }} priority style={{ width: '100%', height: '100%' }} alt={element.tittle} width={950} height={550}></Image>
                              </div>
                              <div className={Style.DialogContent_box_content} >
                                <div className={Style.DialogContent_box_Avatar_div}>
                                  <Avatar
                                    alt="Abhijeet_kumar_insta_img"
                                    src="/Image/Abhijeet_kumar_insta_img.webp"
                                    sx={{ width: 50, height: 50 }}

                                  />
                                  <h6 className={Style.mobile_text}>daredevil8582</h6>
                                </div>
                                <div>
                                  <h5 className={Style.mobile_text}>{element.tittle}</h5>
                                  <p className={Style.mobile_text}>{element.description}</p>
                                </div>
                                <div>
                                  <Button onClick={() => handleClose(element.tittle)}>Perfect!!!</Button>

                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
