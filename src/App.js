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
    .then((res)=>{
    if(!res.ok){
      throw new Error("Network issue")
    }
      return res.json()})
    .then((data)=>setCountries(data))
    .catch((error)=>console.error("Error fetching data:" + error));
},[]);

const handleSearch=(e)=>{
  const searchterm =e.target.value.toLowerCase();
  setSearch(searchterm);

  const filterCountries=countries.filter((country)=>
    country.name.common.toLowerCase().includes(searchterm.toLowerCase()));
    setFilter(filterCountries);
    
}



  return (
    <div class="App">
      <div class="inputBox">
      <input type="text" placeholder="search for countries"
      value={search}
      onChange={handleSearch}/>
      </div>
   <div className="container">
  {filterr.map((country) => (
       <div key={country.cca3} class="countryCard">
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
