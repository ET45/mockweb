import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page from './page';

function App() {
  return (
    <div className="App">
   <Routes><Route path="/" element={<Page />}></Route></Routes>
    </div>
  );
}

export default App;
