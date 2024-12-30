import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch countries data from the API

     const fetchCountries = async ()=>{
        const url = "https://0b9f457a-c7f4-4a28-9f68-2fe10314cedd.mock.pstmn.io/crio";
        try{
            const res = await axios.get(url);
            
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            setData(res.data)
        }catch(error){
            console.error(error);
        }
        // console.log(data);
    }

        useEffect(()=>{
        fetchCountries();
    }, [])


  // Filter countries based on the search term
  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search for countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "50%",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Display Country Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div
              key={index}
              className="countryCard"
              style={{
                width: "120px",
                margin: "10px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={country.png}
                alt={`Flag of ${country.common}`}
                style={{ width: "100px", height: "100px", borderRadius: "8px" }}
              />
              <h4 style={{ marginTop: "10px", fontSize: "18px", color: "#333" }}>
                {country.common}
              </h4>
            </div>
          ))
        ) : (
          <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
            No countries found
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
