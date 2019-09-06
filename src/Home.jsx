import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [results, setResult] = useState([]);

    const [page, setPage] = useState(1);
    const [max, setMax] = useState(1);

    const limit = 2;

    useEffect(() => {

        axios.get(`http://192.168.99.100:8080/api/collections/get/Blogpost?limit=${limit}&skip=${limit * page - limit}`)
            .then(res => {
                console.log(res.data.entries);

                setResult(res.data.entries);
                setMax(Math.floor(res.data.total / limit) + 1)
            })
            .catch(function (error) {
                alert('Error fetching the api')
            });

    }, [page]);

    console.log("wathcout!");

    return (
        <div className="container">
            <div className="text-center">
                <h2>Home page</h2>
                <br></br>
                <Link to="/">Home</Link>
                <Link to="/Arthurs">Arthurs</Link>
            </div>
            <div className="posts">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result._id}>
                                <td>{result.Title}</td>
                                <td>{result.Name.display}</td>
                                <td>{result.Date}</td>
                                <td><Link to={`/Blogg/${result._id}`}>More info</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={() => setPage(page - 1)}>&lt;</button>
            <input type="number" min={1} max={max} value={page}/>
            <button onClick={() => setPage(page + 1)}>&gt;</button>
        </div>
    )
}
export default Home