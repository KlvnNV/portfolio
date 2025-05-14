// import React from 'react';
import { Link } from "react-router-dom";

import PostForm from "./post/PostForm";
import PostList from "./post/PostList";
import ButtonBack from "../components/ButtonBack";

function AppPost() {
    return (
        <div className='Page_examples'>
            <PostForm />
            <PostList />
                <Link to='../' className='sum2'>
                    <ButtonBack name='Назад' />
                </Link>
        </div>
    );
}

export default AppPost;
