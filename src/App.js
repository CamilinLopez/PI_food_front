import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const navigate = useNavigate();
  const [home, setHome] = useState({
    pass: false,
    bit: true
  });


  useEffect(() => {
    if (home.pass && home.bit===true) {
      setHome({...home, bit:false});
      navigate("/Home");
    } 
  }, [home,setHome,navigate])

  return (
    <div className="App">
      {
        home.pass && <Nav />
      }
      <Routes >
        {
          !home.pass
            ?
            <>
              <Route path='/' element={<Landing setHome={setHome} home={home} />} />
            </>
            :
            
            <>
              <Route path='/Home' element={<Home />} />
              <Route path='/Form' element={<Form /> } />
            </>
        }
        <Route path='*' element={<Navigate to="/" /> } />
      </Routes>
    </div>
  );
}

export default App;
