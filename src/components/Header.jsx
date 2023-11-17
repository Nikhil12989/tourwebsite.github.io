import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSuitcase, faEnvelope, faBars  , faImage} from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import '../App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
      

        <section className='home'>
          <div className="setContainer container">
            <div className="homeText">
              <h1 className="title"> <b>स्पेस-सारथी</b></h1>
              <h4 className="subTitle">
                तुमची अध्यात्मिक आणि साहसी सहलीची येथे सुरू होते:
              </h4>
            </div>
          </div>
          <div className="search-container">
            <div className="search">
              <input type="text" placeholder="Search Destination" />
              <button>Search...</button>
            </div>
          </div>
        </section>

        <nav className='top-right'>
          <ul className={menuOpen ? 'open' : ''}>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/About">
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
              </Link>
            </li>
            <li>
              <Link to="/Gallery">
                <FontAwesomeIcon icon={faImage} /> Gallery
              </Link>
            </li>
            <li>
              <Link to="/Tourpackges">
                <FontAwesomeIcon icon={faSuitcase} /> Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Us
              </Link>
            </li>
          </ul>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
