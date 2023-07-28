
import Head from 'next/head'
// import Home from './Portfolio/Home'
// import Mainmenu from './Flipkart/Home'
import Home from './Nextflix/Main'


 function IndexFile() {

  return (
    <>
     <Head>
        <title>Welcome to My PortFolio</title>
      </Head>
     <Home/> 
     {/* <Mainmenu/> */}
    </>
  )
}

export default IndexFile;