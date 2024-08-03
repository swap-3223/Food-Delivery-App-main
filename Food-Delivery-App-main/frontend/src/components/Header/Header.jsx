import React from 'react'
import './Header.css'
import {assets} from "../../assets/assets"
const Header = () => {
    return (
        <div className='header'>
        <img src={assets.header_img} className='headerImg'/>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
