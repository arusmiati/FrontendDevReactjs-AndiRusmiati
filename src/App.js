import './App.css';
import Home from './pages/Home';
import DetailRestaurant from './components/DetailRestaurant';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail-restaurant/:id" component={DetailRestaurant} />
      </Switch>
    </Router>
  );
}

export default App;
