import styles from './HeroStyle.module.css';
import heroImg from '../../assets/2.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.png';
import twitterLight from '../../assets/x-light.svg';
import twitterDark from '../../assets/x-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';
import {motion} from 'framer-motion';
import {fadeIn} from '../../varients';



function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'dark' ? twitterLight : twitterDark;
    const githubIcon = theme === 'dark' ? githubLight : githubDark;
    const linkedinIcon = theme === 'dark' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
    <motion.div 
    variants={fadeIn("left", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}    
    
    
    
    className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} 
        alt="Profile Picture of Ranjith Babu" />
        <img 
        className={styles.colorMode}
        src={themeIcon} alt="color mode icon" 
        onClick={toggleTheme}/>
    </motion.div>


    <motion.div 
    variants={fadeIn("right", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}   
    
    
    className={styles.info}>
        <h1>
            Ranjith 
            <br /> 
            Babu
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://twitter.com" target='_blank'>
                <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/Ranjithbabu0912" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/ranjithbabu0912/" target='_blank'>
                <img src={linkedinIcon} alt="linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>
            With a passion for developing morden React web apps for commercial businesses.
        </p>
        <a href={CV} download>
            <button className='hover' >
                Resume
            </button>
        </a>
    </motion.div>
    </section>
  );
  
}

export default Hero;