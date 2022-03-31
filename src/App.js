import { Provider } from "react-redux";
import "./App.css";
import Github from "./Github";
import Store from "./store/storeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatorComponent } from "./components";

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
      path: "/creator",
      element: (
        <div className="App">
          <CreatorComponent />
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
