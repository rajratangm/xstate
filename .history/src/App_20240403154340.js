import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries]= useState([]);
  const [states, setStates]= useState([]);
  const [selectedCountry, setSelectedCountry]= useState('');
  const [stateSelected, setStateSelected]= useState('')

  const [cities, setCities]= useState([])
  const [city, setCity]= useState('')

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


  const getStatesData= async ()=>{
    try{
      const data = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
      const res = await data.json();
      setStates(res)
    }
    catch(e){
      console.log(e)

    }
  }

  const getCitiessData = async ()=>{
    try{
      const data = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${stateSelected}/cities`)
      const res = await data.json();
      setCities(res)
    }
    catch(e){
      console.log(e)

    }
  }

  const handleCountryChange=(e)=>{
    console.log(e.target.value)
    setSelectedCountry(e.target.value)

  }

  const handleStateChange=(e)=>{
    console.log(e.target.value)

    setStateSelected(e.target.value)

  }

  const handleCityChange=(e)=>{
    console.log(e.target.value)
    setCity(e.target.value)
  }
  

  useEffect(()=>{
    getCountriesData()
  })

  useEffect(()=>{
    if(selectedCountry){
      getStatesData();
    }
  },[selectedCountry])


  useEffect(()=>{
    if(stateSelected){
      getCitiessData();
    }
  },[stateSelected])

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

        <select onChange={handleStateChange} value={stateSelected}>
          <option value='' disabled>Select State</option>
          {
            states.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>

        <select onChange={handleCityChange} value={city}>
          <option value='' disabled>Select City</option>
          {
            cities.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }

        </select>
      </div>
      {
        (selectedCountry? && stateSelected? && City){
          <p>You selected <span>{city}</span>,{stateSelected},{selectedCountry}</p>
        }
      }

      
    
    </>
  );
}

export default App;
