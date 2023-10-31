import React from 'react'
import "./style.css"
import Button from '../../Common/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { RWebShare } from 'react-web-share'
function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-componant'>
        <motion.h1 className='track-crypto-heading'initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >Track Crypto</motion.h1>
        <motion.h1 className='real-time-heading' 
        initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.5}}
        >Real Time.</motion.h1>
        <motion.p className='info-text' initial={{opacity:0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5 , delay:0.75}} >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        <motion.div className='btn-flex' initial={{opacity:0 , x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, delay:1.5}}>
          <Link to="/dashboard"><Button text={"Dashboard"}/></Link>
          {/* <Button text={"Dashboard"}/> */}
          {/* <RWebShare
            data={{
              text: "Crypto-Tracker using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
           
            <Button text="Share App" outlined={true} />
          </RWebShare> */}

<RWebShare
        data={{
          text: "Track Your Crypto ",
          url: "https://cryptos-tracking-app.netlify.app/",
          title: "Crypto-Tracker-app",
        }}
        onClick={() => console.log("shared successfully!")}
      >
         <button className='outlined-btn'>Share 🔗</button>
      </RWebShare>

          {/* <Button text={"share"} outlined={true}/> */}
        </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone}  className='iphone'
        initial={{y:-10}}
        animate={{y:10}}
        transition={{
            type:"smooth",
            repeatType: "mirror",
            duration:2,
            repeat: Infinity
        }}/>
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent
