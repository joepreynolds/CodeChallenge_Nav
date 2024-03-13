import React, { useState, useRef, useEffect } from 'react';
import navData from './data/navigation.json'
import './css/Nav.css'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('amsterdam');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef([]);

  useEffect(() => {

    const updateUnderline = () => {
      const activeElement = navRef.current.find((el) => el.innerText === activeItem);

      if (activeElement) {
        const adjuster = activeElement.offsetWidth * .25;
        const width = activeElement.offsetWidth - adjuster;
        const left = activeElement.offsetLeft + (adjuster / 2);

        setUnderlineStyle({
          width: `${width}px`,
          transform: `translateX(${left}px)`,
        });
      }
    };

    updateUnderline();
  }, [activeItem]);

  return (
    
      <nav className="navbar">
        <ul>
          {navData.cities.map((city, index) => (
            <li
            key={city.section} 
            ref={el => navRef.current[index] = el}
            className={activeItem === city.section ? 'active' : ''} 
            onClick={() => setActiveItem(city.label)}><a href={`#${city.label}`}>{city.label}</a>
            
            </li>
            
          ))}
        </ul>
        <div className="full" ></div>
        <div className="underline" style={underlineStyle}></div>
      </nav>
    
  );
};

export default Navbar
