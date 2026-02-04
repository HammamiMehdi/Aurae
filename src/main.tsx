import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import InscriptionAgence from './pages/InscriptionAgence.tsx'
import InscriptionModele from './pages/InscriptionModele.tsx'
import Login from './pages/Login';
import ProfileAgence from './pages/ProfileAgence.tsx'
import ProfileModele from './pages/ProfileModele.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'
import MesProjetsModele from './pages/MesProjetsModele.tsx'
import Projet from './pages/Projet.tsx'
import Models from './pages/Models.tsx'
import ContratClient from './pages/ContratClient.tsx'
import AddProjectPage from './pages/AddProjectPage.tsx'
import PageTransition from './components/ui/PageTransition.tsx'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><App /></PageTransition>} />
        <Route path="/inscription-agence" element={<PageTransition><InscriptionAgence /></PageTransition>} />
        <Route path="/inscription-modele" element={<PageTransition><InscriptionModele /></PageTransition>} /> 
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/forgotPassword" element={<PageTransition><ForgotPassword /></PageTransition>} />
        <Route path="/profile-agence" element={<PageTransition><ProfileAgence /></PageTransition>} />
        <Route path="/profile-modele" element={<PageTransition><ProfileModele /></PageTransition>} />
        <Route path="/projets-modele" element={<PageTransition><MesProjetsModele /></PageTransition>} />
        <Route path="/projet" element={<PageTransition><Projet /></PageTransition>} />
        <Route path="/Models" element={<PageTransition><Models /></PageTransition>} />
        <Route path="/add-project" element={<PageTransition><AddProjectPage /></PageTransition>} />
        <Route path="/contrat-client" element={<PageTransition><ContratClient /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)