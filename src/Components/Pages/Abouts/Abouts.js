import "./Abouts.css";
import React from 'react';
import pro from "../../../img/profile/profile.jpg"
import Skills from "../Skills/Skills";
import { useReactToPrint } from 'react-to-print';

const Abouts = () => {

    const cvRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => cvRef.current,
    });

    return (
        <div className="abouts" >
            <section className="about section" ref={cvRef}>
                <div className="contain">
                    <div className="row">
                        <div className="section-title">
                            <h2>About Me</h2>
                        </div>


                    </div>
                    <div className="about-content" >
                        <div className="row">
                            <div className="about-text">
                                <h3>I'm Nafiul Haque and <span>Web Developer</span></h3>
                                <p>Experienced Web Developer adept in bringing forth expertise in design, installation, testing, and maintenance of web applications. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</p>
                            </div>
                            <div className="shape-con">
                                <div className="shape" >
                                    <img className="profile" src={pro} alt="profile" />
                                    <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#F1C21B" d="M52.8,-50.6C69.4,
                -36.3,84.3,-18.2,83.1,-1.2C81.9,15.8,64.6,31.6,
                48.1,38.9C31.6,46.2,15.8,45.1,-3.7,48.8C-23.3,
                52.6,-46.5,61.2,-58.7,53.9C-70.9,46.5,-72.1,23.3,
                -65.9,6.2C-59.7,-10.9,-46.2,-21.7,-34,-36C-21.7,-50.3,
                -10.9,-68,3.6,-71.7C18.2,-75.3,36.3,-64.9,52.8,-50.6Z"
                                            transform="translate(100 100)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info">
                                <div className="row">
                                    <div className="info-item">
                                        <p>Birthday : <span> 07 Aug 1999</span></p>
                                    </div>
                                    <div className="info-item">
                                        <p>Age : <span>26</span></p>
                                    </div>
                                    <div className="info-item">
                                        <p>Website :<span>nafiulhaque-portfolio.netlify.app</span></p>
                                    </div>
                                    <div className="info-item">
                                        <p>Email : <span>nafiulhaque22@gmail.com</span></p>
                                    </div>
                                    <div className="info-item">
                                        <p>Phone : <span> +8801739-184393</span></p>
                                    </div>
                                    <div className="info-item">
                                        <p>City : <span>Bogura</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons">
                                        <a href="#" className="btn" onClick={handlePrint} >Download CV</a>
                                        <a href="#" className="btn hire-me">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="skills">
                                <h4>Skills</h4>
                                <Skills />
                            </div>

                        </div>
                        <div className="page-break" />
                        <div className="row">
                            <div className="education">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box">
                                        <div className="timeline">
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2017-2023
                                                </h3>
                                                <h4 className="timeline-title">B.Sc</h4>
                                                <p className="timeline-text">Subject: Electrical & Electronic Engineering <br />
                                                    Institute: TMSS Engineering College,Bogura.<br />
                                                    CGPA: 2.6 out of 4 <br /> Passing Year: 2023  </p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2015-2017
                                                </h3>
                                                <h4 className="timeline-title">HSC</h4>
                                                <p className="timeline-text">Subject: Science <br />
                                                    Institute: Armed Police Battalion Public School & College.<br />
                                                    GPA: 5 out of 5 <br /> Passing Year: 2017  </p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2012-2015
                                                </h3>
                                                <h4 className="timeline-title">SSC</h4>
                                                <p className="timeline-text">Subject: Science <br />
                                                    Institute: Gabtali Pilot High School.<br />
                                                    GPA: 5 out of 5 <br /> Passing Year: 2015  </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience">
                                <h3 className="title">Training</h3>
                                <div className="row">
                                    <div className="timeline-box">
                                        <div className="timeline">
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 6 months
                                                </h3>
                                                <h4 className="timeline-title">Web Design & Development</h4>
                                                <p className="timeline-text">Topic: HTML,CSS,JavaScript,PHP,Wordpress <br />
                                                    Institute: Learning & Earning Development Project(LEDP).<br />
                                                    Year: 2020  </p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2 months
                                                </h3>
                                                <h4 className="timeline-title">BUREAU OF MANPOWER, EMPLOYMENT AND TRAINING </h4>
                                                <p className="timeline-text">Topic: Motor Driving   <br />
                                                    Institute:Technical Training Center Bogra(TTC).<br />
                                                    Year: 2019 </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Abouts