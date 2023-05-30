
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Index from './pages/Index';
import Descubre from './pages/Descubre';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Sign from './pages/SignIn';
import Perfil from './pages/Perfil';
import CanalYT_Start from './pages/canalYoutube/CanalYoutube';
import CanalYT2 from './pages/canalYoutube/CanalYoutube_2';
import CanalYT3 from './pages/canalYoutube/CanalYoutube_3';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cuestionario from './pages/Autoevaluacion';
import Retroalimentacion from './pages/Retroalimentacion';
import Menu from './pages/MenuAutoevaluacion';

const ScrollToTop=()=>{
  const{pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return null;
}

function App() {
  return (
    <>
      
      <Router>
        <ScrollToTop/>
        <Header />
        <Nav/>
        <Routes>
          <Route path="/" Component={Index}/>
          <Route path="/Descubre" Component={Descubre}/>
          <Route path="/CanalYoutube" Component={CanalYT_Start}/>
          <Route path="/CanalYoutube/2" Component={CanalYT2}/>
          <Route path="/CanalYoutube/3" Component={CanalYT3}/>
          <Route path="/Contacto" Component={Contacto}/>
          <Route path="/Iniciar-sesion" Component={Login}/>
          <Route path="/Registrarse" Component={Sign}/>
          <Route path="/Perfil" Component={Perfil}/>
          <Route path="/Autoevaluacion" Component={Cuestionario}/>
          <Route path="/Autoevaluacion/Retroalimentacion/" Component={Retroalimentacion}/>
          <Route path='/Seleccionar-cuestionario' Component={Menu}/>
          
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
