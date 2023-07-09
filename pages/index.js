
import Head from 'next/head'
import Home from './Portfolio/Home'
import Mainmenu from './Flipkart/Home'


 function IndexFile() {

  return (
    <>
     <Head>
        <title>Welcome to My PortFolio</title>
      </Head>
     {/* <Home/>  */}
     <Mainmenu/>
    </>
  )
}

IndexFile.requireNavbarAndFooter = true;
export default IndexFile;