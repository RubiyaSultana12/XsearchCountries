import { useEffect, useState } from 'react';
import './index.css';

function App() {
const[countries, setCountries]=useState([]);
console.log(countries);
const api=" https://restcountries.com/v3.1/all";

const[search, setSearch]=useState("");
const[filterr, setFilter]=useState([]);


useEffect(()=>{
  fetch(api)
    .then((res)=>res.json())
    .then((data)=>setCountries(data))
    .catch((error)=>console.error("Error fetching data:" + error));
},[]);

const handleSearch=(e)=>{
  const searchterm =e.target.value.toLowerCase();
  setSearch(searchterm);

  const filterCountries=countries.filter((country)=>
    country.name.common.toLowerCase().includes(searchterm));
    setFilter(filterCountries);
    
}



  return (
    <div className="App">
      <div className="inputBox">
      <input type="text" placeholder="search for countries"
      value={search}
      onChange={handleSearch}/>
      </div>
   <div className="container">
  {filterr.map((country) => (
       <div key={country.index} className="countryCard">
  <img
       src={country.flags.png}
       alt={`Flag of ${country.name.common}`}
       /> 
     <p>{country.name.common}</p>
     </div>
      ))}
     </div>
  
    

   

   
</div>
    
  );
}

export default App;
