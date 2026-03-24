import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="page" style={{paddingTop: '6rem'}}>
      <Helmet>
        <title>About Us | Fine Bearing & Oil Seal Store Ludhiana</title>
        <meta name="description" content="Learn about Fine Bearing & Oil Seal Store, the most trusted bearing dealer in Ludhiana. Discover our mission, history, and commitment to industrial excellence." />
      </Helmet>

      <section className="section">
        <div className="container" style={{maxWidth: '900px'}}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title">About <span>Fine Bearing</span></h1>
            
            <div className="glass" style={{padding: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '2rem'}}>
              <h2 style={{borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block'}}>Our Legacy</h2>
              <p style={{marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)'}}>
                Established in the industrial hub of Ludhiana (Dholewal), <strong>Fine Bearing & Oil Seal Store</strong> has cemented its reputation as the most reliable bearing dealer in Ludhiana. Over the years, we have dedicated ourselves to powering the machinery that drives the region's manufacturing, automotive, and agricultural sectors.
              </p>
            </div>

            <div className="grid-2" style={{marginBottom: '2rem'}}>
              <div className="glass" style={{padding: 'clamp(1.2rem, 3vw, 2rem)'}}>
                <h3>Our Mission</h3>
                <p style={{color: 'var(--color-text-muted)'}}>To be the #1 bearing supplier in Ludhiana by providing uncompromising quality, ready stock availability, and technical expertise that our clients can rely on 24/7.</p>
              </div>
              <div className="glass" style={{padding: 'clamp(1.2rem, 3vw, 2rem)'}}>
                <h3>Our Vision</h3>
                <p style={{color: 'var(--color-text-muted)'}}>To create a seamless supply chain of high-performance hydraulic products and CNC spare parts across Punjab, driving industrial innovation and operational efficiency.</p>
              </div>
            </div>

            <div className="glass" style={{padding: 'clamp(1.5rem, 5vw, 3rem)', textAlign: 'center'}}>
              <h2>Trust and Authority</h2>
              <p style={{color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 2rem'}}>
                When you search for "bearing shop near me", you need a partner who understands the critical nature of machine downtime. That's why we only stock premium, verified components.
              </p>
              <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
                {['100% Genuine Brands', '24/7 Support Channel', 'Wholesale Pricing', 'Technical Advisory'].map((tag, i) => (
                  <span key={i} style={{padding: '0.5rem 1rem', border: '1px solid var(--color-primary)', borderRadius: '50px', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem'}}>{tag}</span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
