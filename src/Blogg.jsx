import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Blogg = (props) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://192.168.99.100:8080/api/collections/get/Blogpost?filter[_id]=${props.match.params.id}`)
            .then((res) => setArticle(res.data.entries[0]));

    }, []);

    console.log(article);
    return (
        <div>
            <div className="text-center">
                <h2>Blogg post</h2>
                <br></br>
                <Link to="/">Home</Link>
                <Link to="/Arthurs">Arthurs</Link>
            </div>
            {!article ? <p>Hämtar...</p> : <ul>
                <li className="title-data">{article.Title}</li>
                <li className="name-data">{article.Name.display}</li>
                <li className="date-data">{article.Date}</li>
                <li className="post-data"><ReactMarkdown source={article.Post} /> </li>
            </ul>}

        </div>
    )
}
export default Blogg