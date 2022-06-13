import logo from './logo.svg';
import store from './redux/Store';
import { Provider } from 'react-redux';
import './App.css';
import DrugContainer from './component/DrugContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <DrugContainer/>
    </div>
    </Provider>
  );
}

export default App;
