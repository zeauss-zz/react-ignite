import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/home/home.component";
import { Route } from "react-router-dom";
import Nav from './components/nav/nav.component';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={('/game/:id', '/')}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
