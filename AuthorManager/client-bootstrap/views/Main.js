import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';

const Main = () =>{

    const [ author, setAuthor ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res =>{
                setAuthor(res.data);
                setLoaded(true)
        });
    }, []);


    return (
        <div>
            
            <Link to="/new">Add an author</Link>

            <h3 className="subtitle">We have a quotes by:</h3>
           
            {loaded && <AuthorList author={author} setAuthor={setAuthor}/>}

        </div>
    )
}

export default  Main;