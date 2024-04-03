import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries]= useState([]);
  
  const [selectedCountry, setSelectedCountry]= useState([])

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

  const handleCountryChange=(e)=>{
    console.log(e.target.value)
    setSelectedCountry(e.target.value)

  }

  useEffect(()=>{
    getCountriesData()
  })
  return (
    <>
      <h1>Select Location</h1>
      <div>
        <select onChange={handleCountryChange} value={selectedCountry}>
          <option value='Select Country' disabled>Select Country</option>
          {
            countries.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>

        <select onChange={handleCountryChange} value={selectedCountry}>
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
