import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Box, Wrench, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'bearings',
    title: 'Industrial Bearings',
    image: '/bearings.png',
    icon: <Settings size={30} color="var(--color-primary)" />,
    desc: 'High-precision bearings for extreme loads and speeds. We supply ball, roller, thrust, and specialized automotive bearings from leading global brands.',
    benefits: ['Low friction', 'High load capacity', 'Extended lifespan', 'Corrosion resistant'],
    applications: ['Manufacturing machinery', 'Agricultural equipment', 'Automotive transmissions'],
    faq: { q: 'Are these bearings suitable for high-speed CNC machines?', a: 'Yes, our precision bearings are explicitly rated for high-RPM environments typical in advanced CNC machining.' }
  },
  {
    id: 'oil-seals',
    title: 'Premium Oil Seals',
    image: '/seals.png',
    icon: <ShieldCheck size={30} color="var(--color-primary)" />,
    desc: 'Top-tier oil seals to prevent lubricant leakage and block contaminants. Available in Nitrile, Viton, and Silicone materials.',
    benefits: ['Superior chemical resistance', 'Temperature stability', 'Exact fit'],
    applications: ['Hydraulic cylinders', 'Engines', 'Pumps & Motors'],
    faq: { q: 'Do you provide high-temperature oil seals?', a: 'Absolutely. We stock Viton oil seals capable of withstanding industrial high-temperature applications without degrading.' }
  },
  {
    id: 'hydraulic',
    title: 'Hydraulic Products',
    image: '/hydraulics.png',
    icon: <Box size={30} color="var(--color-primary)" />,
    desc: 'Comprehensive range of hydraulic power components including pumps, valves, hoses, and fittings to keep your systems pressurized and efficient.',
    benefits: ['Leak-proof design', 'High pressure rating', 'Durable construction'],
    applications: ['Press machines', 'Earthmoving equipment', 'Material handling'],
    faq: { q: 'Can I get custom hydraulic hose assemblies?', a: 'Yes, we provide custom hydraulic hose crimping and assemblies directly at our Dholewal facility.' }
  },
  {
    id: 'cnc',
    title: 'CNC Machine Spare Parts',
    image: '/cnc.png',
    icon: <Wrench size={30} color="var(--color-primary)" />,
    desc: 'Critical replacement parts for CNC lathes and milling machines to ensure zero downtime. Linear guides, ball screws, and spindle parts.',
    benefits: ['Micron-level accuracy', 'OEM quality', 'Immediate availability'],
    applications: ['CNC Milling', 'CNC Turning', 'Automated production lines'],
    faq: { q: 'Do you keep CNC ball screws in stock?', a: 'We maintain a ready inventory of standard ball screws and linear guideways to minimize your machine downtime.' }
  }
];

export default function Products() {
  return (
    <div className="page" style={{paddingTop: '6rem'}}>
      <Helmet>
        <title>Industrial Bearings & Oil Seals Catalog | Fine Bearing Ludhiana</title>
        <meta name="description" content="Explore our extensive catalog of industrial bearings, premium oil seals, hydraulic products, and CNC machine spare parts in Ludhiana." />
      </Helmet>

      <section className="section bg-surface">
        <div className="container" style={{textAlign: 'center', maxWidth: '800px'}}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title" style={{marginBottom: '1rem'}}>Our <span>Products</span></h1>
            <p style={{color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '2rem'}}>We are the premier bearing dealer and industrial supplier in Ludhiana, offering unparalleled quality and inventory depth.</p>
            <a href="/catalogue.pdf" target="_blank" rel="noreferrer" className="btn" style={{display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem'}}>
              <FileText size={20} /> Open Full Catalogue (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display: 'flex', flexDirection: 'column', gap: '6rem'}}>
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.id} 
                id={cat.id} 
                className="glass" 
                style={{ overflow: 'hidden', padding: 0 }} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
              >
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 500px), 1fr))',
                  alignItems: 'stretch'
                }}>
                  {/* Image Section */}
                  <div style={{ 
                    height: 'clamp(300px, 50vh, 500px)', 
                    order: i % 2 === 0 ? 0 : 1,
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        filter: 'brightness(0.9) contrast(1.1)'
                      }} 
                    />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '50%', 
                      background: 'linear-gradient(to top, rgba(5,5,5,0.8), transparent)' 
                    }} />
                  </div>

                  {/* Info Section */}
                  <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
                      <div style={{ color: 'var(--color-primary)' }}>{cat.icon}</div>
                      <h2 style={{margin: 0, fontSize: '2.5rem'}}>{cat.title}</h2>
                    </div>
                    
                    <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-muted)', lineHeight: '1.8'}}>{cat.desc}</p>
                    
                    <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                      <div>
                        <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>Key Benefits</h4>
                        <ul style={{ color: 'var(--color-text-muted)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {cat.benefits.map((b, idx) => <li key={idx} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-primary)' }}>•</span> {b}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>Applications</h4>
                        <ul style={{ color: 'var(--color-text-muted)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {cat.applications.map((a, idx) => <li key={idx} style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-primary)' }}>•</span> {a}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(212, 175, 55, 0.03)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 8px 8px 0', marginBottom: '2.5rem' }}>
                      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text)'}}>Q: {cat.faq.q}</p>
                      <p style={{color: 'var(--color-text-muted)', margin: 0, fontStyle: 'italic'}}>A: {cat.faq.a}</p>
                    </div>

                    <Link to={`/products/${cat.id}`} className="btn-outline" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2rem' }}>
                      View Detailed Specifications <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', marginTop: '4rem'}}>
            <a href="https://wa.me/918146110976" className="btn" target="_blank" rel="noreferrer">Request Bulk Quote on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
