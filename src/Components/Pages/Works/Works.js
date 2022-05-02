import "./Works.css";
import cover1 from "../../../img/I will install and setup wordpress with demo theme 1.jpg";
import cover2 from "../../../img/I will install and setup wordpress with demo theme.jpg";
import cover3 from "../../../img/I will provide psd or xd to html css bootstrap responsive website.jpg";


import React from 'react'

const Works = () => {
    return (
        <div id="works">
            <div className="header">
                <h1>Works on</h1>
            </div>
            <div className="box__grp">
                <div className="box my-5">
                    <div className="items hvr-grow">
                        <img className="img" src={cover1} />
                        <div className="order hvr-buzz">
                            <a href="">Order Now</a>
                        </div>
                        <div className="text">
                            <h5>install and setup wordpress with demo</h5>
                        </div>
                    </div>
                    <div className="items hvr-grow">
                        <img className="img" src={cover2}
                        />

                        <div className="order hvr-buzz">
                            <a href="">Order Now</a>
                        </div>
                        <div className="text">
                            <h5>provide psd or xd to html css bootstrap responsive website</h5>
                        </div>
                    </div>
                    <div className="items hvr-grow">
                        <img src={cover3} className="img"
                        />

                        <div className="order hvr-buzz">
                            <a href="">Order Now</a>
                        </div>
                        <div className="text">
                            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, officiis?</h5>
                        </div>
                    </div>
                    <div className="items hvr-grow">
                        <div className="img"
                        >
                        </div>
                        <div className="order hvr-buzz">
                            <a href="">Order Now</a>
                        </div>
                        <div className="text">
                            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, officiis?</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Works