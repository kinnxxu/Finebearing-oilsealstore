import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src="/FINE BEARING LOGO.jpg" alt="Fine Bearing Logo" style={{ height: '60px', width: 'auto', borderRadius: '4px' }} />
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              #1 Ranked Website in Ludhiana for premium quality Bearings, Oil Seals, Hydraulic Products, and CNC Machine spare parts.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/blog">Blog & Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>Products</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)' }}>
              <li><Link to="/products#bearings">Industrial Bearings</Link></li>
              <li><Link to="/products#oil-seals">Premium Oil Seals</Link></li>
              <li><Link to="/products#hydraulic">Hydraulic Products</Link></li>
              <li><Link to="/products#cnc">CNC Spare Parts</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <span>Fine Bearing & Oil Seal Store, Dholewal, Ludhiana, Punjab, India</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={20} color="var(--color-primary)" />
                <a href="tel:+918146110976">+91 8146110976</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={20} color="var(--color-primary)" />
                <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fine Bearing & Oil Seal Store. All Rights Reserved. Designed for premium performance.</p>
        </div>
      </div>

      <style>{`
        .footer { background: var(--color-surface); padding: 5rem 0 2rem; border-top: 1px solid var(--color-border); }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 4rem; }
        .footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid rgba(0, 0, 0, 0.04); color: var(--color-text-muted); font-size: 0.9rem; }
        .footer a:hover { color: var(--color-primary); }
      `}</style>
    </footer>
  );
};

export default Footer;
