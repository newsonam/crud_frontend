
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
function App() {
  return (
    <div className="App"> 
     <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/productedit/:_id" element={<ProductEdit />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
