import React,{useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './certifications.styles.css'

export default function Certifications() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="certifications">
            <div className="section">
                <h2 className="sub-title long" data-aos="fade-up">Certifications and Recognitions</h2>
                <Container>
                    <Grid container>
                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Complete React Developer in 2021</h3>
                            <p className="item-content">w/ Redux, Hooks, GraphQL</p>
                            <p className="item-content"><a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/" className="item-link">On Udemy</a></p>
                            <p className="item-content">In Progress</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Object-Oriented Design</h3>
                            <p className="item-content">From the University of Alberta</p>
                            <p className="item-content">on Coursera</p>
                            <p className="item-content"><a href="https://drive.google.com/file/d/1kH7pt_sXYggueFKyNecgj01ttYlpHD2T/view?usp=sharing" className="item-link">View Certificate</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Web Design for Everybody Specialization</h3>
                            <p className="item-content">From the University of Michigan</p>
                            <p className="item-content">on Coursera</p>
                            <p className="item-content"><a href="https://drive.google.com/file/d/10hmOXZdivN_mdB_ApzJQnDcVc-c1jFYX/view?usp=sharing" className="item-link">View Certificate</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Research Paper Presentation Contest</h3>
                            <p className="item-content">Motion Microscope to detect Covid-19</p>
                            {/*<p className="item-content">Team of three</p>*/}
                            <p className="item-content">Runners Up</p>
                            <p className="item-content"><a href="https://drive.google.com/file/d/1cYdpu472JywsFOiKQIpg4ud1Jv7QvXAx/view?usp=sharing" className="item-link">View Certificate</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">BEC Vantage Certification</h3>
                            <p className="item-content">From Cambridge English</p>
                            <p className="item-content">Certified in Business English Communication</p>
                            <p className="item-content"><a href="https://drive.google.com/file/d/1nvdQWf0bcogGJFeDc6Zr_ddyuL3dipTJ/view?usp=sharing" className="item-link">View Certificate</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">STEP Certification</h3>
                            <p className="item-content">from The Hindu Group</p>
                            <p className="item-content">Listening, Speaking, Reading and Writing skills in English</p>
                            <p className="item-content"><a href="https://assets.steptest.in/certificates/STEP-592605440935006485-20200129095622.pdf" className="item-link">View Certificate</a></p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}