// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [countries, setCountries]= useState([]);
//   const [states, setStates]= useState([]);
//   const [selectedCountry, setSelectedCountry]= useState('');
//   const [stateSelected, setStateSelected]= useState('')

//   const [cities, setCities]= useState([])
//   const [city, setCity]= useState('')

//   const getCountriesData= async ()=>{
//     try{
//       const data = await fetch('https://crio-location-selector.onrender.com/countries')
//       const res = await data.json();
//       setCountries(res)
//     }
//     catch(e){
//       console.log(e)

//     }
//   }


//   const getStatesData= async ()=>{
//     try{
//       const data = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
//       const res = await data.json();
//       setStates(res)
//     }
//     catch(e){
//       console.log(e)

//     }
//   }

//   const getCitiessData = async ()=>{
//     try{
//       const data = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${stateSelected}/cities`)
//       const res = await data.json();
//       setCities(res)
//     }
//     catch(e){
//       console.log(e)

//     }
//   }

//   const handleCountryChange=(e)=>{
//     console.log(e.target.value)
//     setSelectedCountry(e.target.value)

//   }

//   const handleStateChange=(e)=>{
//     console.log(e.target.value)

//     setStateSelected(e.target.value)

//   }

//   const handleCityChange=(e)=>{
//     console.log(e.target.value)
//     setCity(e.target.value)
//   }
  

//   useEffect(()=>{
//     getCountriesData()
//   })

//   useEffect(()=>{
//     if(selectedCountry){
//       getStatesData();
//     }
//   },[selectedCountry])


//   useEffect(()=>{
//     if(stateSelected){
//       getCitiessData();
//     }
//   },[stateSelected])

//   return (
//     <>
//       <h1>Select Location</h1>
//       <div>
//         <select onChange={handleCountryChange} value={selectedCountry}>
//           <option value='Select Country' disabled>Select Country</option>
//           {
//             countries.map((item)=>{
//               return <option value={item}>{item}</option>
//             })
//           }

//         </select>

//         <select onChange={handleStateChange} value={stateSelected}>
//           <option value='' disabled>Select State</option>
//           {
//             states.map((item)=>{
//               return <option value={item}>{item}</option>
//             })
//           }

//         </select>

//         <select onChange={handleCityChange} value={city}>
//           <option value='' disabled>Select City</option>
//           {
//             cities.map((item)=>{
//               return <option value={item}>{item}</option>
//             })
//           }

//         </select>
//       </div>
//       {
//         selectedCountry && stateSelected && city &&(
//           <p>You selected <span>{city}</span>, {stateSelected}, {selectedCountry}</p>
//         )}
      

      
    
//     </>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitySelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://crio-location-selector.onrender.com/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        try {
          const response = await axios.get(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`);
          setStates(response.data);
        } catch (error) {
          console.error('Error fetching states:', error);
        }
      }
    };
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`);
          setCities(response.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
    };
    fetchCities();
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <select onChange={handleStateChange} value={selectedState}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <select onChange={handleCityChange} value={selectedCity}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <div>{selectedCountry && selectedState && selectedCity && `You selected ${selectedCity}, ${selectedState}, ${selectedCountry}`}</div>
    </div>
  );
};

export default CitySelector;
