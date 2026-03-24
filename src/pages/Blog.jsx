import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogTitles = [
  { id: 'top-bearing-suppliers-ludhiana', title: 'Top Bearing Suppliers in Ludhiana', active: true },
  { id: 'how-to-select-bearings', title: 'How to Select Bearings for Industrial Machines', active: true },
  { id: 'best-oil-seal-dealers-ludhiana', title: 'Best Oil Seal Dealers in Ludhiana', active: true },
  { id: 'understanding-hydraulic-systems', title: 'Understanding Hydraulic Systems in Heavy Machinery', active: false },
  { id: 'cnc-machine-maintenance', title: 'Ultimate Guide to CNC Machine Maintenance', active: false },
  { id: 'signs-bearing-failure', title: '7 Warning Signs of Imminent Bearing Failure', active: false },
  { id: 'nitrile-vs-viton-seals', title: 'Nitrile vs. Viton Oil Seals: Which is Better?', active: false },
  { id: 'improving-machine-lifespan', title: 'How Quality Bearings Improve Overall Machine Lifespan', active: false },
  { id: 'ludhiana-industrial-hub', title: 'Why Ludhiana is the Core Industrial Hub of Punjab', active: false },
  { id: 'lubrication-best-practices', title: 'Bearing Lubrication Best Practices for 2024', active: false },
  { id: 'types-of-hydraulic-pumps', title: 'Common Types of Hydraulic Pumps Explained', active: false },
  { id: 'authenticating-skf-timken', title: 'How to Identify Authentic SKF and Timken Bearings', active: false },
  { id: 'cost-of-downtime', title: 'The True Cost of Machine Downtime in Manufacturing', active: false },
  { id: 'future-of-cnc', title: 'The Future of CNC Machining in India', active: false },
  { id: 'agricultural-bearings-guide', title: 'Selecting the Right Bearings for Agricultural Tractors', active: false }
];

export default function Blog() {
  return (
    <div className="page" style={{paddingTop: '6rem'}}>
      <Helmet>
        <title>Industrial Insights & Blog | Fine Bearing Ludhiana</title>
        <meta name="description" content="Read expert articles on industrial machinery, how to select bearings, the best oil seal dealers in Ludhiana, and maintenance tips to optimize performance." />
      </Helmet>

      <section className="section bg-surface">
        <div className="container" style={{textAlign: 'center', maxWidth: '800px'}}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title" style={{marginBottom: '1rem'}}>Industrial <span>Insights</span></h1>
            <p style={{color: 'var(--color-text-muted)', fontSize: '1.2rem'}}>Your ultimate resource for technical knowledge, buying guides, and updates from the leading bearing supplier in Ludhiana.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {blogTitles.map((blog, i) => (
              <motion.div key={i} className="glass" style={{padding: 'clamp(1.2rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', height: '100%'}} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', flex: 1}}>{blog.title}</h3>
                
                {blog.active ? (
                  <Link to={`/blog/${blog.id}`} className="btn-outline" style={{display: 'inline-block', textAlign: 'center', padding: '0.5rem', borderRadius: '5px', marginTop: '1rem', fontSize: '0.9rem', width: '100%'}}>Read Full Article</Link>
                ) : (
                  <span style={{display: 'inline-block', textAlign: 'center', padding: '0.5rem', borderRadius: '5px', marginTop: '1rem', fontSize: '0.9rem', width: '100%', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--color-text-muted)'}}>Coming Soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
