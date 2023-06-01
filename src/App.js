import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Indexpage from "./components/Indexpage";
import Login from "./components/Login";
import Register from "./components/Register";
import {UserContextProvider} from "./components/UserContext";
import Createnewpost from "./components/Createnewpost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Indexpage />} />
       <Route path={'/login'} element={<Login />} />
       <Route path={'/register'} element={<Register />} />
       <Route path={'/create'} element={<Createnewpost />} />
       <Route path={'/post/:id'} element={<PostPage />} />
       <Route path={'/edit/:id'} element={<EditPost />} />
        </Route>
    </Routes>
    </UserContextProvider>
    
    
  );
}

export default App;
