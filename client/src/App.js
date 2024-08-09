import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Prompt from "./components/prompt/Prompt";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  console.log("user = ", user)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          {user ? <Profile /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
