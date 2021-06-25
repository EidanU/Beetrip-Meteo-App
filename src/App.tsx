import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WeatherResultPage from './pages/WeatherResultPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route path={`/WeatherPage/`}>
            <WeatherResultPage />
        </Route>
    </Switch>
</Router>

);
}

export default App;
