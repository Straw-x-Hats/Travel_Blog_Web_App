import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Auth from './Components/Auth';
import Diaries from './Components/Diaries';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/diary' element={<Diaries/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
