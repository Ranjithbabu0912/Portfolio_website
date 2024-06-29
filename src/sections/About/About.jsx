import styles from './AboutStyles.module.css';
import aboutMe from '../../assets/Aboutme.png';
import journey from '../../assets/MyJourney.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../../varients';


function About() {
  return (
    <section id='about' className={styles.container}>
        <h1 className='sectionTitle'>About</h1>

        <motion.p 
        variants={fadeIn("left", .1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}} 


        className={styles.aboutMe}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I'm <b>&nbsp;RANJITH BABU,</b>a passionate and dedicated web developer with a strong foundation in front-end development and a particular expertise in React.js. As a recent graduate, I bring fresh ideas and a strong desire to stay at the cutting edge of web technologies.
        </motion.p>
            <motion.img 
            variants={fadeIn("left", .1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}} 
            
            className={styles.aboutImg}  src={aboutMe} alt="about me logo" />
        <br />

        <h1>My Journey</h1>

        <motion.p 
        variants={fadeIn("right", .6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}} 


        className={styles.myJourney} hidden>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My journey into the world of web development began during my studies, where I discovered my love for creating intuitive and dynamic user interfaces. Over the course of my academic career, I honed my skills in HTML, CSS, and JavaScript, and quickly developed a keen interest in modern frameworks, particularly React.js.
        </motion.p>

        <motion.img 
        variants={fadeIn("right", .6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}} 

        className={styles.journeyImg}  src={journey} alt="about me logo" />
        <br />

        <h1>What I Do</h1>
        <motion.p 
        variants={fadeIn("up", .1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}}
        
        
        className={styles.WhatIDo}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I specialize in building responsive and user-friendly web applications that not only meet but exceed user expectations. My skill set includes:
        </motion.p>

        <motion.p 
        variants={fadeIn("up", .6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}}
        
        
        className={styles.list}>
            <br />

            <motion.li
            variants={fadeIn("up", .1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}}>
              &#128640; HTML/CSS: Crafting well-structured and visually appealing web pages.</motion.li> <br />

            <motion.li
            variants={fadeIn("up", .2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}}>
              &#128640; JavaScript: Writing clean and efficient code to enhance functionality.</motion.li> <br />

            <motion.li
            variants={fadeIn("up", .3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}}>
              &#128640; React.js: Developing complex and interactive user interfaces.</motion.li><br />

            <motion.li
            variants={fadeIn("up", .4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}}>&#128640; Responsive Design: Ensuring a seamless experience across all devices.</motion.li>
              <br />

            <motion.li
            variants={fadeIn("up", .5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false , amount:  0}}>
            
            &#128640; Version Control: Using Git to manage and collaborate on projects.</motion.li>
        </motion.p>





       
    </section>
  );
}

export default About;