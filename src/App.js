 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart/Chart';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import ToDo from './components/ToDo/ToDo';
import ToDoDetail from './components/ToDoDetail/ToDoDetail';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <ToDo></ToDo>
          </Route>
          <Route exact path='/todo'>
            <ToDo></ToDo>
          </Route>
          <Route exact path='/todo/:id'>
            <ToDoDetail></ToDoDetail>
          </Route>
          <Route exact path='/chart'>
            <Chart></Chart>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
