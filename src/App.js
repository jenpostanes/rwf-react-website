import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='' component={Home} exact></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
