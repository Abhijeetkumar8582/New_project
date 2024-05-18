import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Home() {
    const [time, setTime] = useState(10)
    const router = useRouter()
    setTimeout(
        function () {
            if (time === 0) {
                router.push("/")
            } else {
                setTime(time - 1)
            }
        }
        , 1000)

    return (
        <div >
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '500px' }}>
                        <img style={{ width: '100%' }} alt="Dynamic portfolio" src='https://media4.giphy.com/media/3o7btQ0NH6Kl8CxCfK/giphy.gif?cid=6c09b9520l2dbkpfv8ell54par9sayq6qsay8jgt9xt14pqs&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' />
                    </div>
                </div>
                <div>
                    <h1 style={{ textAlign: "center", marginTop: "7%", fontFamily: "Copperplate" }}>you will redirect in {time} second</h1>

                </div>
            </div>
        </div>
    )
}

export default Home
