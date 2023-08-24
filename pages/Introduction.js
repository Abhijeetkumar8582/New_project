import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import router from 'next/router';
import Image from 'next/image'
import Head from 'next/head'


function Logo() {

  const [time, setTime] = useState(4)

  useEffect(() => {
    document.body.classList.add('my-page-background');
    return () => {
      document.body.classList.remove('my-page-background');
    };
  }, []);


  setTimeout(() => {
    if (time == 0) {
      sessionStorage.setItem('Introduction', 'Completed')
      router.push("/Portfolio/Home")
    }
    setTime(time - 1)
  }, 1000);

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className='' style={{ backgroundColor: "black", height: '100vh' }}>

        <Image className='intro_logo' src="/Image/Abhi_Logo.webp" width={70} height={70} alt='Abhijeet_logo'></Image>
        <h1 className='IntroTitle' style={{color: 'white'}} >Hey, I'm Abhijeet</h1>
        <h2 className='Introdesc' style={{color: 'white'}}  >a React frontend developer</h2>
        <div className='container'>
          <Image className='intro_image' src="/Image/home_img.webp" width={500} height={500} alt='portfolio_image'></Image>
        </div>
        <div className='Logo_preLoading' >

          <ReactTypingEffect

            text={["Welcome to my Portfolio!!!"]}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                      >{char}</span>
                    );
                  })}
                </h1>

              );

            }}
            speed={70}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Logo