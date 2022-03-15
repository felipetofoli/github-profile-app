import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Github from './Github';
import Store from './store/storeConfig';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Github />
      </div>
    </Provider>
  );
}

export default App;
