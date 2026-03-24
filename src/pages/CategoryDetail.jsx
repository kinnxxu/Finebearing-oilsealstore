import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { productsData } from '../data/productsData';
import { ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CategoryDetail() {
  const { id } = useParams();
  const category = productsData[id];

  if (!category) {
    return (
      <div className="page" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h1 className="section-title">Category <span>Not Found</span></h1>
        <Link to="/products" className="btn-outline" style={{ marginTop: '2rem' }}>Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>{category.title} | Fine Bearing Ludhiana</title>
        <meta name="description" content={`Detailed technical specifications and types of ${category.title} offered by Fine Bearing & Oil Seal Store.`} />
      </Helmet>

      {/* Hero Header */}
      <section style={{ 
        height: '60vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: '-80px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("${category.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/products" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)', 
              marginBottom: '2rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <ChevronLeft size={20} /> Back to Products
            </Link>
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem' }}>
              {category.title.split(' ')[0]} <span>{category.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p style={{ 
              color: 'var(--color-text-muted)', 
              fontSize: '1.2rem', 
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title">Available <span>Specifications</span></h2>
            <div style={{ height: '4px', width: '80px', background: 'var(--color-primary)', margin: '1.5rem auto', borderRadius: '2px' }} />
          </motion.div>

          <div className="grid-3">
            {category.subProducts.map((sub, i) => (
              <motion.div 
                key={i}
                className="glass"
                style={{ padding: '2.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'var(--color-primary)' }}
              >
                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1rem' }}>{sub.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{sub.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            style={{ 
              marginTop: '6rem', 
              textAlign: 'center', 
              padding: '4rem', 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)',
              borderRadius: '24px',
              border: '1px solid var(--color-border)'
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need Technical Support?</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Our expert engineers can help you select the exact part for your specific machinery and load requirements.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/918146119761" className="btn">
                Request Bulk Quote <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="btn-outline">Visit Our Facility</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
