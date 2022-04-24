import { Provider } from "react-redux";
import "./App.css";
import Github from "./Github";
import Store from "./store/storeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatorComponent, RepositoryListComponent } from "./components";

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
      path: "/github-profile-app/",
      element: (
        <div className="App">
          <Github />
        </div>
      ),
    },
    {
      path: "/github-profile-app/creator",
      element: (
        <div className="App">
          <CreatorComponent />
        </div>
      ),
    },
    {
      path: "/github-profile-app/:username/repositories",
      element: (
        <div className="App">
          <RepositoryListComponent />
        </div>
      ),
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
