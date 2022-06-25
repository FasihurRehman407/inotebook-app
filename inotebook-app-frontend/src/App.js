import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
    <NoteState>
      <Navbar/>

      <Alert alert={alert}/>
      <Routes>
          <Route
          
            exact
            path="/"
            element={
              <Home showAlert={showAlert}/>
            }
          />
          <Route
            exact
            path="/about"
            element={
             <About/>
            }
          /><Route
            exact
            path="/login"
            element={
             <Login/>
            }
          /><Route
            exact
            path="/signup"
            element={
             <Signup/>
            }
          />
          </Routes>
          </NoteState>
    </>
  );
}

export default App;
