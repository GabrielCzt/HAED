
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Index from './pages/Index';
import Descubre from './pages/Descubre';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Sign from './pages/SignIn';
import CanalYT_Start from './pages/canalYoutube/CanalYoutube';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Nav/>
        <Routes>
          <Route path="/" Component={Index}/>
          <Route path="/Descubre" Component={Descubre}/>
          <Route path="/CanalYoutube" Component={CanalYT_Start}/>
          <Route path="/Contacto" Component={Contacto}/>
          <Route path="/Iniciar-sesion" Component={Login}/>
          <Route path="/Registrarse" Component={Sign}/>
          
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
