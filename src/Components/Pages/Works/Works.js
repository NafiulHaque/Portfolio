import "./Works.css";
import React from 'react';
import img1 from "../../../img/works-img/custom-web-app.jpg";
import img2 from "../../../img/works-img/e-commerce.jpg";
import img3 from "../../../img/works-img/full-stack.jpg";
import img4 from "../../../img/works-img/wordpress.jpg";



const Works = () => {
    return (
        <div id="works">
            <div className="plate">
                <div className="left-p">
                    <h3>Custom Web Application</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen
                        book.</p>
                    <a href="/#" className="btn" alt="button">See More</a>
                </div>
                <img className="right-p" src={img3} alt="web application" />


            </div>
            <div className="plate">
                <div className="left-p">
                    <h3>E-commerce</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen
                        book.</p>
                    <a href="/#" className="btn" alt="button">See More</a>
                </div>
                <img className="right-p" src={img2} alt="ecommerce" />
            </div>
            <div className="plate">
                <div className="left-p">
                    <h3>Full Stack Development</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen
                        book.</p>
                    <a href="/#" className="btn" alt="button">See More</a>
                </div>
                <img className="right-p" src={img1} alt="ecommerce" />
            </div>
            <div className="plate">
                <div className="left-p">
                    <h3>WordPress Development</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen
                        book.</p>
                    <a href="/#" className="btn" alt="button">See More</a>
                </div>
                <img className="right-p" src={img4} alt="ecommerce" />
            </div>

        </div >
    )
}

export default Works