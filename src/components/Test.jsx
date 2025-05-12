import React from 'react'
import { motion } from 'motion/react'
import { animate } from 'motion'

const shapeVariants={
    initialRect:{
        x: -100,
        opacity: 0,
    },
    animateRect:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
        }
    }
    initialCirc:{
        y: -100,
        opacity: 0,
    },
    animateCirc:{
        y: 0,
        opacity: 1,
        transition:{
            duration: 3,
        }
    }
}


const Test = () => {
  return (
    <section
     style={{
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        }}
    >
      <motion.div 
      // initial={{ x: 0, y: 0, opacity: 0}}
      // animate={{ x: [0,100], y: [0,-200], opacity: [0,1] }}
      // transition={{
      //  duration: 2,
        // delay: 4,
        //ease:"easeInOut",
        //repeat: Infinity,
     // }}
     variants={shapeVariants}
     initial="initialRect"
     animate="animateRect"
        style={{with:300, height:300, background:"red"}}
      ><p>dffffffffffffffffff</p></motion.div>
      <motion.div 
     variants={shapeVariants}
     initial="initialCirc"
     animate="animateCirc"
        style={{
            with:300,
            height:300,
            background:"green", 
            borderRaduis:"100%",
        }}
      ><p>dffffffffffffffffff</p></motion.div>
    </section>
  )
}

export default Test
