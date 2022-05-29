import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UserContainer from "./components/User/User";
import PostsListContainer from "./components/PostsList/PostsList";
import PostContainer from "./components/Post/Post";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <div className="content">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/user:id' element={<UserContainer />}/>
                <Route path='/user:id/posts' element={<PostsListContainer />}/>
                <Route path='/post:id' element={<PostContainer />}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
