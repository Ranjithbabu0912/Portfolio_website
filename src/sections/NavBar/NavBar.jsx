import React, { Component } from 'react';
import styles from './NavBarStyles.module.css';
import {motion} from 'framer-motion';
import { fadeIn } from '../../varients';

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <section id='navbar' className={styles.container}>
                <motion.nav 
                variants={fadeIn("down", .1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once : false , amount:  0.1}}                
                
                className={styles.navbar}>
                    <h1>RB</h1>
                    <div>
                        <ul className={this.state.clicked ? `${styles.active}` : ''}>
                            <li><a className="active" href="#">Profile</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </motion.nav>
            </section>
        );
    }
}

export default NavBar;
