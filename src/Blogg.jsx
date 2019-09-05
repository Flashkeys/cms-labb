import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogg = (props) => {
    const results = props.results;
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    const data = results.filter(iteam => iteam._id === myParam)[0];

    console.log("this one");
    console.log(results[myParam]);
    console.log(data);
    if (!data) {
        return null
    }
    return (
        <div>
            <ul>
                <li className="title-data">{data.Title}</li>
                <li className="name-data">{data.Name}</li>
                <li className="date-data">{data.Date}</li>
                <li className="post-data">{data.Post}</li>
            </ul>
        </div>
    )
}
export default Blogg