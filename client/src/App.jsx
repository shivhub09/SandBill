import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import OverView from './pages/overview/OverView';
import LoginPage from './pages/Login/Login';
import { useState } from 'react';

// import Dashboard from './pages/Dashboard';
// import Clients from './pages/Clients';
// import Bills from './pages/Bills';
// import Login from './pages/Login';
// import Register from './pages/Register';

// import Navbar from './components/Navbar';

function App() {
  const [loading] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<OverView />} />
            <Route path='/dashboard' element={<OverView />} />
            {/* <Route path="/clients" element={<Clients />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
