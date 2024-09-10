import styles from './ContactStyles.module.css';
import {motion} from 'framer-motion';
import {fadeIn} from '../../varients';


function Contact() {
  return (
    <section id='contact' className={styles.container}>
    <h1 className='sectionTitle'>Contact</h1>
    <motion.form
    variants={fadeIn("left", .1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once : false , amount:  0}}
    action="">
        <div className='formGroup'>
            <label htmlFor="name" hidden>
                Name
            </label>
            <input type="text" name="name" id="name" placeholder='Name' required/>
        </div>
        <div className='formGroup'>
            <label htmlFor="email" hidden>
                Email
            </label>
            <input type="text" name="email" id="email" placeholder='E mail' required/>
        </div>
        <div className='formGroup'>
            <label htmlFor="message" hidden>
                Message
            </label>
            <textarea type="text" name="message" id="message" placeholder='Message' required></textarea>
        </div>
        <input type="submit" className='hover btn' value='Submit' />
    </motion.form>
    </section>
  );
}

export default Contact;