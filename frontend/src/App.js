import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/data`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
  return (
    <div>
            <h1>Spring Boot + React</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Backend API URL: {process.env.REACT_APP_API_URL}</p>
            <div>
                <img src={logo} className="App-logo" alt="logo" /> 
            </div>
        </div>
  );
}

export default App;
