import styles from './SkillsStyles.module.css';
import lightIcon from '../../assets/lightCheck.svg';
import darkIcon from '../../assets/darkCheck.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import {motion} from 'framer-motion';
import { fadeIn } from '../../varients';


function Skills() {
  const {theme, toggleTheme} = useTheme();

  const checkMarkIcon = theme === 'light' ? darkIcon : lightIcon;

  return (
  <section id='skills' className={styles.container}>
    
    
    <h1 className='sectionTitle'>Skills</h1>
    <motion.div 
    variants={fadeIn("up", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}
    
    className={styles.skillList}>

        <SkillList src={checkMarkIcon}skill="HTML" />

        <SkillList src={checkMarkIcon} skill="CSS" />

        <SkillList src={checkMarkIcon} skill="JavaScript" />

        <SkillList src={checkMarkIcon} skill="TypeScript" />

        <SkillList src={checkMarkIcon} skill="NODE" />
    </motion.div>

    <motion.hr variants={fadeIn("up", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}/>
    
    
    
    <motion.div 
        variants={fadeIn("up", .1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}}
        
        className={styles.skillList}>

        <SkillList src={checkMarkIcon}skill="React" />

        <SkillList src={checkMarkIcon} skill="Angular" />

        <SkillList src={checkMarkIcon} skill="Vue" />

        <SkillList src={checkMarkIcon} skill="BootStrap CSS" />

    </motion.div>
    
    <motion.hr variants={fadeIn("up", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}/>
    
    
    
    <motion.div 
    variants={fadeIn("up", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}
    
    className={styles.skillList}>

        <SkillList src={checkMarkIcon}skill="Redux" />

        <SkillList src={checkMarkIcon} skill="Webpack" />

        <SkillList src={checkMarkIcon} skill="Git" />

        <SkillList src={checkMarkIcon} skill="jest" />

    </motion.div>
   

  </section>
  );
}

export default Skills;