import "./Projects.css";
import React from 'react';
import p_img_1 from "../../../img/projects-img/bookshop.png";
import p_img_2 from "../../../img/projects-img/etechkr.png";
import p_img_3 from "../../../img/projects-img/pizzeria.png";
import p_img_4 from "../../../img/projects-img/ex.jpg";
import p_img_5 from "../../../img/projects-img/EXEYZONE.png";
import p_img_6 from "../../../img/projects-img/myhomeapp.png";


const Projects = () => {
    return (

        <div id="projects">
            <div className="header">
                <h1>Projects</h1>
            </div>
            <div className="containe">
                <div className="project-flex my-5">
                    <div className="items">
                        <div className="item-thumb" style={{ "backgroundImage": `url(${p_img_1})` }}>
                            <div className="btn-1">
                                <a href="#" data-featherlight="pizzaria.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/Book-Shop/" target="_blank">Live Preview</a>
                            </div>

                        </div>
                    </div>

                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_3})` }}>
                            <div className="btn-1">
                                <a href="#" data-featherlight="bookshop.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/Pizzeria/" target="_blank">Live Preview</a>
                            </div>

                        </div>
                    </div>

                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_2})` }}>
                            <div className="btn-1">
                                <a href="#" data-featherlight="etechkr.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/ETechKR/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_4})` }}
                        >
                            <div className="btn-1">
                                <a href="#" data-featherlight="pizzaria.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/Book-Shop/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_5})` }}
                        >
                            <div className="btn-1">
                                <a href="#" data-featherlight="pizzaria.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/EXEYZONE/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_6})` }}
                        >
                            <div className="btn-1">
                                <a href="#" data-featherlight="pizzaria.html">See Instant</a>
                                <a href="https://esp32-69129.web.app/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item-thumb hvr-grow" style={{ "backgroundImage": `url(${p_img_3})` }}
                        >
                            <div className="btn-1">
                                <a href="#" data-featherlight="pizzaria.html">See Instant</a>
                                <a href="https://nafiulhaque.github.io/Book-Shop/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >



    )
}

export default Projects