import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';
import AuthorForms from '../components/AuthorForms';

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


    const createAuthor = (auth) => {
        axios.post("http://localhost:8000/api/author/new", auth)
            .then((res) => {
                setAuthor([...author, res.data]);
            });
      };

    return (
        <div>
            
            <Link to="/">Home</Link>

            <h3 className="subtitle">Add an author:</h3>
            
            <AuthorForms
                onSubmitProp={createAuthor}
                initialName=""
                initialText=""
            />
            

        </div>
    )
}

export default  Main;