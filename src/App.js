import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Github from "./Github";
import Store from "./store/storeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProfileListComponent } from "./components";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Github />
              </div>
            }
          />
          <Route
            path="/profile/:username"
            element={<UserProfileListComponent />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
