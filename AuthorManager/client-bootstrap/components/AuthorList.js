import React from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {

    const { author, setAuthor } = props;

    const removeFromDom = (authId) => {

        setAuthor(author.filter(auth=>auth._id !== authId));
    }

    return (
        <div>
            {author.map((auth, idx)=>{
                return (
                    <p key={idx}> 
                        
                            {auth.name}
                        
                        |<Link to={"/edit/" + auth._id}>
                            Edit
                        </Link> 
                        <DeleteButton 
                            authorId={auth._id} 
                            successCallback={()=>removeFromDom(auth._id)} 
                        />
                    </p>
                )
            })}
        </div>
    )
}

export default AuthorList;