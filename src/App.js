import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import ErrorPage from './pages/ErrorPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/posts" />} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/write" component={WritePage} />
      <Route path="" component={ErrorPage} />
    </Switch>
  );
}

export default App;
