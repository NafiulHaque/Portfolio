import "./Abouts.css";
import React from 'react';
import pro from "../../../img/profile/profile.jpg"
import Skills from "../Skills/Skills";

const Abouts = () => {
    return (
        <div className="abouts">
            <section className="about section">
                <div className="contain">
                    <div className="row">
                        <div className="section-title">
                            <h2>About Me</h2>
                        </div>


                    </div>
                    <div className="about-content">
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
                                        <a href="#" className="btn">Download CV</a>
                                        <a href="#" className="btn hire-me">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="skills">
                                <h4>Skills</h4>
                                <Skills />
                            </div>

                        </div>
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
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2017-2023
                                                </h3>
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2017-2023
                                                </h3>
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience">
                                <h3 className="title">Experience</h3>
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
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2017-2023
                                                </h3>
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
                                            </div>
                                            {/* ====timeline item ====== */}
                                            <div className="timeline-item">
                                                <div className="circle-dot">

                                                </div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2017-2023
                                                </h3>
                                                <h4 className="timeline-title">B.Sc in EEE</h4>
                                                <p className="timeline-text">he href attribute requires a valid value to be accessible.
                                                    Provide a valid, navigable address as the href value.
                                                    If you cannot provide a valid href, but still need the element to resemble a link</p>
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