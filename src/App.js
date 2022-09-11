import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/home/Home';
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element = {<Home />} />
        
          <Route path="*" element = {<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
