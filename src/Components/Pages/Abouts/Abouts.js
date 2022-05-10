import "./Abouts.css";
import React from 'react';
import pro from "../../../img/profile/profile.jpg"

const Abouts = () => {
    return (
        <div className="abouts">Abouts Under construction
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
    )
}

export default Abouts