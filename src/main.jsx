import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx'
import BackToTop from './components/BackToTop/BackToTop.jsx'
import Spotlight from './components/Spotlight/Spotlight.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import "remixicon/fonts/remixicon.css"
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PreLoader/>
      <Spotlight />
      <ScrollProgress />
      <div className="container mx-auto px-6">
        <Navbar />
        <App />
        <Footer/>
      </div>
      <BackToTop />
    </ThemeProvider>
  </StrictMode>,
)
