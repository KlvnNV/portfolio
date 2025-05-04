import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/first";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import AppPost from './pages/apppost';
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<First />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/apppost' element={<AppPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

// import React from 'react';

// import PostForm from './pages/post/PostForm';
// import PostList from './pages/post/PostList';

// function App() {
//     return (
//         <div className='App'>
//             <PostList />
//             <PostForm />
//         </div>
//     );
// }

// export default App;
