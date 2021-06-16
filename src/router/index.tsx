import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import DashBoard from "../pages/dashboard";
import Messages from "../pages/messages";
import Projects from "../pages/projects";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
