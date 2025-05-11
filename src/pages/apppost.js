// import React from 'react';
import PostForm from './post/PostForm';
import PostList from './post/PostList';
// import { Link } from "react-router-dom";
import ButtonBack from '../components/ButtonBack';

function AppPost() {
    return (
        <div className='Page_examples'>
            <PostForm />
            <PostList />
                                                  {/* <div className='sum2'> */}
                                                      {/* <Link to='../'>
                                                          <button className='click2'>Назад</button>
                                                      </Link> */}
                                                      <ButtonBack/>
                                                      {/* </div> */}
            
  </div>
    );
}

export default AppPost;
