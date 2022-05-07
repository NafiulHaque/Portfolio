import React from 'react';
import Services from '../Pages/Services/Services';
import Works from '../Pages/Works/Works';
import "./Main.css";

import himg from "../../img/IMG_20201107_153505.jpg"

const Main = () => {
    return (
        <div className='main'>
            <div className='hero' style={{ "backgroundImage": `url(${himg})` }}>
                <h1>Freelance <br /> Website <br /> Designer</h1>
                <p>Freelance specialist in responsive website design,
                    front-end development, react, pure CSS project etc.</p>
            </div>
            <Services />
            <h1>Works On</h1>
            <Works />
        </div>
    )
}

export default Main