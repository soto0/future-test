import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Main/Search/Search';
import MainPage from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Routes>
          <Route path='' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
