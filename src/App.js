import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Github from "./Github";
import Store from "./store/storeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProfileListComponent } from "./components";

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <div className="App">
          <Github />
        </div>
      ),
    },
    {
      path: "/profile/:username",
      element: <UserProfileListComponent />,
    },
  ];

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
