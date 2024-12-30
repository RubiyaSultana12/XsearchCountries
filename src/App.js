import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[error, setError]=useState(null);

 useEffect(() => {
    const fetchCountries = async () => {
      try {
        console.log("Fetching countries from API...");

        // Make API request
        const response = await fetch(
          "https://0b9f457a-c7f4-4a28-9f68-2fe10314cedd.mock.pstmn.io/crio"
        );

        if (response.status == 200) {
          console.log("API call success. Data received:");

        }

        // Parse JSON response
        const data = await response.json();
        setCountries(data); // Set state with API data
        setError(null); // Reset error state in case of success
      } catch (err) {
        console.error("API call failed with error:", err.message);
        setError(err.message); // Set error state
      }
    };

    fetchCountries();
  }, []);

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
          filteredCountries.map((country) => (
            <div
              key={country.cca3}
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
              <h2 style={{ marginTop: "10px", fontSize: "18px", color: "#333" }}>
                {country.common}
              </h2>
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
