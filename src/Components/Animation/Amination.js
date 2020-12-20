import React from 'react';
import Brain from './Intro_Brain.svg';
import Featured from './Intro_Featured_Image_Empty.svg';
import Front from './Intro_Front_Layer.svg';
import './Animation.css';

export const Amination = () => {
    return (
        <div>
            <img src={Brain}    className="brain"    alt="brain"     />
            <img src={Front}    className="front"    alt="front"     />
            <img src={Featured} className="featured" alt="featured"  />
        </div>
    )
}
