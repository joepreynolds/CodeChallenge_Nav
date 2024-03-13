import { useState, useEffect } from 'react'
import './css/App.css'
import Navbar from './Nav.jsx'
import Clock from './Clock';

  function App() {
    const [cityName, setCityName] = useState('');
  
    useEffect(() => {
      // Function to update the cityName based on the current URL hash
      const updateCityFromHash = () => {
        // Extract city name from the hash, removing the '#' prefix
        const newCityName = window.location.hash.slice(1);
        setCityName(decodeURIComponent(newCityName));
      };
  
      // Update cityName on component mount and hash change
      updateCityFromHash();
      window.addEventListener('hashchange', updateCityFromHash);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('hashchange', updateCityFromHash);
    }, []); // Empty dependency array ensures this effect runs only once on mount
  
    return (
      <>
        <Navbar/>
        <div>
          {cityName && <Clock cityName={cityName} />}
        </div>
      </>
    );
  }

export default App
