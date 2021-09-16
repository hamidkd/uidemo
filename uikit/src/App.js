import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import DemoPage from "./DemoPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/dark">
            <DemoPage className="dark" />
          </Route>
          <Route exact path="/">
            <DemoPage />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
