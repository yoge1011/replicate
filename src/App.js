import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Blogs from './pages/blogs/blogs.page'
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import SingleBlog from './pages/single-blog/single-blog.page'; 
import User from './pages/user/user.page';

const App = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="App">
      { pathName.includes('/user') ? null : <Header /> }
      
      <Switch>
          <Route
            exact
            path="/"
            render={() =><Redirect to="/blogs" />}
          />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={ SingleBlog } />
          <Route path="/user/:id" component={ User } />
      </Switch>
    </div>
  );
}

export default App;
