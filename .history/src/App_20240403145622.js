import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries]= useState([]);
  const [selectedCountry, setSelectedCountry]

  const getCountriesData= async ()=>{
    try{
      const data = await fetch('https://crio-location-selector.onrender.com/countries')
      const res = await data.json();
      setCountries(res)
    }
    catch(e){
      console.log(e)

    }
  }

  useEffect(()=>{
    getCountriesData()
  })
  return (
    <>
      <h1>Select Location</h1>
      <div>
        <select>
          <option value='Select Country' disabled>Select Country</option>
          {
            countries.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>
      </div>
    
    </>
  );
}

export default App;
