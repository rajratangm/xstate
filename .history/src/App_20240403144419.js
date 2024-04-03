import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [countries, setCountries]= useState([]);
  return (
    <>
      <h1>Select Location</h1>
      <div>
        <select>
          <option value='Select Country' disabled>Select Country</option>

        </select>
      </div>
    
    </>
  );
}

export default App;
