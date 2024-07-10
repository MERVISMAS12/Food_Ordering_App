import image from '../../public/logo_aroma_white.png';
const Header = () => {
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
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;