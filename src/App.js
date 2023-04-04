import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (

    <Routes >
      <Route path='/' element={<Landing />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/Detail/:DetailId' element={<Detail />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>

  );
}

export default App;
