import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import './index.css'
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import Daycare from './pages/Daycare';
import Wellness from './pages/Wellness';
import Grooming from './pages/Grooming';
import Tumpro from './pages/Tumpro';
import Blogpost from './pages/Blogpost';
import Sun from './pages/Sun';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Appointments from './pages/Appointments';

// =========================
// ScrollToTop — har route change pe
// page ko upar scroll karta hai
// =========================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// =========================
// Layout — Navbar/Footer ko
// SignUp/SignIn page pe hide karta hai
// =========================
const Layout = () => {
  const location = useLocation();

  const hideLayout = ["/", "/signup", "/signin"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicesnav" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/care" element={<Daycare />} />
        <Route path="/sum" element={<Wellness />} />
        <Route path="/pung" element={<Grooming />} />
        <Route path="/cart" element={<Tumpro />} />
        <Route path="/hen" element={<Blogpost />} />
        <Route path="/faq" element={<Sun />} />
        <Route path="/prime" element={<Policy />} />
        <Route path="/ten" element={<Terms />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
)