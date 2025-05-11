// import React from 'react';
import PostForm from './post/PostForm';
import PostList from './post/PostList';
import ButtonBack from '../components/ButtonBack';

function AppPost() {
    return (
        <div className='Page_examples'>
            <PostForm />
            <PostList />
            <ButtonBack/>
            
  </div>
    );
}

export default AppPost;
