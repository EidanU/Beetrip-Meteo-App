import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherResultPage from "./pages/WeatherResultPage";
import HomePage from "./pages/HomePage";
import NotFound from "./components/errors/404NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path={`/WeatherPage/`}>
          <WeatherResultPage />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
