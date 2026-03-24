import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/FINE BEARING LOGO.jpg" alt="Fine Bearing Logo" style={{ height: '50px', width: 'auto', borderRadius: '4px' }} />
        </Link>
        
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
          <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <a href="tel:+918146119761" className="btn btn-outline" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Phone size={18} /> Call Now
          </a>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <style>{`
        .header { position: fixed; top: 0; width: 100%; z-index: 1000; padding: 1.5rem 0; transition: var(--transition-smooth); }
        .header.scrolled { background: var(--color-bg); backdrop-filter: blur(10px); padding: 1rem 0; border-bottom: 1px solid var(--color-border); }
        .nav-container { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--color-primary); }
        
        .nav-links { display: flex; gap: 2.5rem; align-items: center; }
        .nav-links a { font-weight: 500; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; color: var(--color-text); }
        .nav-links a:hover, .nav-links a.active { color: var(--color-primary); }
        .hamburger { display: none; background: none; border: none; color: var(--color-text); cursor: pointer; }
        
        @media (max-width: 900px) {
          .nav-links {
            display: flex; position: absolute; top: 100%; left: 0; width: 100%;
            background: var(--color-surface); backdrop-filter: blur(10px);
            flex-direction: column; padding: 2rem; text-align: center;
            opacity: 0; visibility: hidden; transform: translateY(-10px);
            transition: var(--transition-smooth);
            border-bottom: 1px solid var(--color-border);
          }
          .nav-links.active { opacity: 1; visibility: visible; transform: translateY(0); }
          .hamburger { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
