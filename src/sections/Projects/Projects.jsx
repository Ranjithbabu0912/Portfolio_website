import styles from './ProjectStyles.module.css';
import qrpro from '../../assets/project 1.jpg';
import webapp from '../../assets/project 2.jpg'; 
import ProjectCard from '../../common/ProjectCard';
import restapp from '../../assets/project 3.jpg';
import {motion} from 'framer-motion';
import { fadeIn } from '../../varients';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <motion.div
        variants={fadeIn("left", .4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false , amount:  0}}
        className={styles.peojectContainer} >

            <ProjectCard src={qrpro} link='https://github.com/Ranjithbabu0912' h3='Instant QR Result Viewer'
            p='Quicke Result Viewer App'/>

            <ProjectCard src={webapp} link='https://github.com/Ranjithbabu0912' h3='Web application for Storage Backlogs'
            p='Inventory Backlog App'/>
            
            <ProjectCard src={restapp} link='https://github.com/Ranjithbabu0912/My-Restaurant' h3='Website for Restaurent'
            p='Restaurent App'/>
        </motion.div>

    </section>
  );
}

export default Projects;