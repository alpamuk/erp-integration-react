import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import MachineStatus from "./pages/MachineStatus";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/settings" component={Settings} />
          <Route path="/machinestatus" component={MachineStatus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
