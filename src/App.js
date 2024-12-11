import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
