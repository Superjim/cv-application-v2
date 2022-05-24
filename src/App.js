import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Card from "./components/shared/Card";
//import pages
import About from "./components/pages/About";
import Wizard from "./components/pages/Wizard";
import JobsPage from "./components/pages/JobsPage";
import Profile from "./components/pages/Profile";

//import Context
import { JobProvider } from "./context/JobContext";
import JobList from "./components/JobList";
import ProfileList from "./components/ProfileList";
import ProfilePage from "./components/pages/Profile";

function App() {
  return (
    <JobProvider>
      <Router>
        <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/wizard" activeClassName="active">
            CV Wizard
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
          <NavLink to="/jobs" activeClassName="active">
            Employment History
          </NavLink>
        </Card>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Home</h1>
                <ProfilePage />
                <JobList />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}

export default App;
