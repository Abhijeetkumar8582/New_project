import React, { useState } from "react";
import Style from "styles/Instagram.module.css";
import Avatar from "@mui/material/Avatar";
import AboutmeSkills from "../Json/AboutmeSkills.json";
import AboutmeLicenses from "../Json/AboutmeLicenses.json";
import AboutmeProject from '../Json/Projects.json';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function Home() {
  const [prevbuttonIndex, setprevbuttonIndex] = useState(0);
  const initialNextbuttonIndex = AboutmeSkills.length >= 10 ? AboutmeSkills.length - 1 : AboutmeSkills.length;
  const [nextbuttonIndex, setnextbuttonIndex] = useState(initialNextbuttonIndex);

  const prevbutton = () => {
    if (prevbuttonIndex !== 0) {
      setnextbuttonIndex(nextbuttonIndex - 1);
      setprevbuttonIndex(prevbuttonIndex - 1);
    }
  };
  const nextbutton = () => {
    if (nextbuttonIndex !== AboutmeSkills.length) {
      setprevbuttonIndex(prevbuttonIndex + 1);
      setnextbuttonIndex(nextbuttonIndex + 1);
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

  return (
    <>
      <div className={Style.Instragram_Main_Div}>
        <div className={Style.Instragram_Div_Side_NavBar}>
          <div className={Style.Instragram_Div_Side_NavBar_heading}>
            <div>
              <h3>Instagram</h3>
            </div>
            <div className={Style.Instragram_Div_Side_NavBar_subHeading}>
              {SideNavBar_array.map((element, i) => (
                <div
                  className={Style.Instragram_Div_Side_NavBar_subHeading_list}
                  key={i}
                >
                  <i className={element.fafa} aria-hidden="true"></i>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h5>{element.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h6>Menu</h6>
            </div>
          </div>
        </div>

        <div className={Style.Instragram_Content_Main_div}>
          <div className={Style.Instragram_Content_Intro_section}>
            <div className={Style.Instragram_Intro_section_image}>
              <Avatar
                alt="Remy Sharp"
                src="/Image/Abhijeet_kumar_insta_img.webp"
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <div>
              <div className={Style.Instragram_Content_username_Section}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h5>daredevil8582</h5>
                </div>
                <div>
                  <button className={Style.edit_profile_button}>
                    Edit Profile
                  </button>
                </div>
                <div>
                  <button className={Style.edit_profile_button}>
                    view archieve
                  </button>
                </div>
                <div>
                  <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                </div>
              </div>
              <div className={Style.Instragram_Content_Post_Section}>
                <div>
                  <h6>{AboutmeSkills.length} Skills</h6>
                </div>
                <div>
                  <h6>{AboutmeLicenses.length} Certifications</h6>
                </div>
                <div>
                  <h6>{AboutmeProject.length} Projects</h6>
                </div>
              </div>
              <div>
                <h6>Abhijeet kumar</h6>
              </div>
              <div>
                <h6>Work Hard</h6>
              </div>
            </div>
          </div>

          <div className={Style.Instragram_Content_Skills_div_container}>
            <div className={Style.Instragram_Content_Skills_div_arrow_left}>
              {prevbuttonIndex === 0 ? null : (
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
                      sx={{ width: 70, height: 70 }}
                    />
                    <h6>{element.skills}</h6>
                  </div>
                )
              )}
            </div>
            {nextbuttonIndex > 8 ? (
              <div className={Style.Instragram_Content_Skills_div_arrow_left}>
                {nextbuttonIndex === AboutmeSkills.length ? null : (
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
                  <TabList onChange={handleChange} textColor="white"
                    indicatorColor="none" aria-label="lab API tabs example">
                    <Tab className={Style.Instragram_Content_Major_div_item} label="Projects" value="1" />
                    <Tab className={Style.Instragram_Content_Major_div_item} label="Item Two" value="2" />
                    <Tab className={Style.Instragram_Content_Major_div_item} label="Certifications" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div>
                    <div className={Style.Project_card}>
                      {AboutmeProject.map((element) => (
                        <div className={Style.Project_card_item}><img src={element.image} style={{width:'100%'}} /></div>
                      ))}

                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
