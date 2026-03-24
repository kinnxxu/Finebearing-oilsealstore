import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram />, label: 'Instagram', url: 'https://instagram.com/finebearings' },
  { icon: <Facebook />, label: 'Facebook', url: 'https://www.facebook.com/Finebearings' },
  { icon: <Linkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/7919741/' },
  { icon: <MessageCircle />, label: 'WhatsApp', url: 'https://wa.me/918146119761' }
];

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url("/group-bearings.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll', // 'fixed' is often buggy on mobile
        backgroundPosition: 'center',
        minHeight: 'clamp(600px, 100vh, 1080px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 15vh, 150px) 1.5rem',
        marginTop: '-80px'
      }}>
        <Helmet>
          <title>Fine Bearing & Oil Seal Store | Ludhiana</title>
          <meta name="description" content="Premium quality industrial bearings, oil seals, hydraulic products, and CNC machine spare parts in Ludhiana." />
        </Helmet>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ height: '4px', backgroundColor: 'var(--color-primary)', borderRadius: '2px' }}
          />

          <h1 style={{
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            textShadow: '0 10px 30px rgba(0,0,0,0.6)',
            background: 'linear-gradient(to right, #D4AF37, #FBF2C1, #D4AF37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Fine Bearing <br className="mobile-only" />
            & Oil Seal Store
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.4rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '800px',
            lineHeight: '1.6',
            margin: 0,
            fontWeight: 400,
            textShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}>
            The #1 Ranked Destination in Ludhiana for Premium Quality Industrial Bearings, High-Performance Oil Seals, Hydraulic Products, and CNC Spare Parts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
          >
            <Link to="/products" className="btn" style={{ minWidth: '200px' }}>View Catalog</Link>
            <a href="https://wa.me/918146110976" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ minWidth: '200px', color: 'white', borderColor: 'white' }}>Contact Us</a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .mobile-only { display: block; }
          .home-hero { background-attachment: scroll !important; }
        }
        @media (min-width: 641px) {
          .mobile-only { display: none; }
          .home-hero { background-attachment: fixed !important; }
        }
      `}</style>

      <section className="section" style={{ background: 'var(--color-bg)', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title">Connect with <span>Us</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Stay updated with our latest industrial updates and new part inventory through our social channels.</p>
          </motion.div>

          <div className="grid-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="glass"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  textDecoration: 'none'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  fontSize: '2rem'
                }}>
                  {social.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-text)' }}>{social.label}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
