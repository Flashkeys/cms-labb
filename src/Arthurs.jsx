import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

const Arthurs = () => {

  const [results, setResult] = useState([]);

  useEffect(() => {

    axios.get("http://192.168.99.100:8080/api/collections/get/Arthur")
      .then(res => {
        console.log(res.data.entries);

        setResult(res.data.entries)
      })
      .catch(function (error) {
        alert('Error fetching the api')
      });

  }, [])

  console.log("Getting the following result");
  console.log(results);

  return (
    <div className="text-center">
      <h2>Arthur page</h2>
      <div className="center">
        <table>
          <tr>
            <th className="box">Title</th>
            <th className="box">Desc</th>
            <th className="box">Image</th>
          </tr>
          {results.map((result) =>
            <tr key={result._id}>
              <td className="box">{result.Name}</td>
              <td className="box">{result.Desc}</td>
              <td className="box"><img src={"http://192.168.99.100:8080/" + result.Image.path}></img></td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}

export default Arthurs