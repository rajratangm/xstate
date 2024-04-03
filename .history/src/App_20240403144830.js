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
          {
            countries.map((item)=>{
              return <option value={ti}>{item}</option>
            })
          }

        </select>
      </div>
    
    </>
  );
}

export default App;
