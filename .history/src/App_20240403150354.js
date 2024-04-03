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

    try{
      const data = await fetch('https://crio-location-https://crio-location-selector.onrender.com/country={countryName}/statesselector.onrender.com/countries')
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
        <select onChange={handleCountryChange}>
          <option value='Select Country' disabled>Select Country</option>
          {
            countries.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>
      </div>

      <div>
        <select onChange={handleSelectedCountry}>
          <option value='State' disabled>State</option>
          {
            selectedCountry.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>
      </div>
    
    </>
  );
}

export default App;
