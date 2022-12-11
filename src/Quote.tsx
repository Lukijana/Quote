import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const fetchData = () => {
    
    fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`) 
    
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.quotes);
        setAuthor(actualData.author);
        setQuote(actualData.quote);
        console.log(data);
        console.log(author);
        console.log(quote);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, );

  
  return (
    <div className="App">
      <h1 className='color'>Quotes</h1>
      <table className="center">
      <tbody>
        <tr>
          <th className="color">ID</th>
        <th className="color">Quote</th>
          <th className="color">Author</th>
        </tr>

        {data && data.map((item ,index) => (
          <tr >
            <td> {index} </td>
            <td>{item.quote}</td>
            <td>{item.author}</td> 
            
          </tr>
        ))}
      </tbody>
      </table>

      <Link to="random"><button className="button1">Click to get random quote</button></Link>

    </div>
  );
}

export default App;