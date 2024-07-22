import image from '../../public/logo_aroma_white.png';
import { useState } from 'react';
const Header = () => {
    const [btnLog, setbtnLog] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="filter-btn" onClick={()=>{
                        btnLog=="Login"? setbtnLog("Logout"): setbtnLog("Login");
                    }}>{btnLog}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;