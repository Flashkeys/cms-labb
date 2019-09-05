import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {
    const results = props.results;

    console.log("wathcout!");
    console.log(results);

    return (
        <div className="container">
            <div className="text-center">
                <h2>Home page</h2>
            </div>
            <div className="links">
                <Link to="/Arthurs">Arthurs</Link>
                <Link to="/Blogg">Blogg</Link>
            </div>
            <div className="posts">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Link</th>
                    </tr>
                    {results.map((result) =>
                        <tr key={result._id}>
                            <td>{result.Title}</td>
                            <td>{result.Name}</td>
                            <td>{result.Date}</td>
                            <td><Link to={`/Blogg?id=${result._id}`}>More info</Link></td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}
export default Home