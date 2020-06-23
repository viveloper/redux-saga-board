import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={PostsPage} />
      <Route path="/:id" exact component={PostPage} />
    </Switch>
  );
}

export default App;
