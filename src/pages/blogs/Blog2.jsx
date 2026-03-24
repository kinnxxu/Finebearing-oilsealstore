import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Blog2() {
  return (
    <div className="page" style={{paddingTop: '6rem'}}>
      <Helmet>
        <title>How to Select Bearings for Industrial Machines | Fine Bearing</title>
        <meta name="description" content="A complete engineering guide on selecting the correct industrial bearings. Learn about load capacities, RPMs, and lubrication from Fine Bearing Ludhiana." />
      </Helmet>

      <div className="container" style={{maxWidth: '800px', paddingBottom: '4rem'}}>
        <motion.article className="glass" style={{padding: '3rem', marginTop: '2rem'}} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>How to Select Bearings for Industrial Machines</h1>
          
          <div style={{color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem'}}>
            <span>By Engineering Team</span> | <span>7 Min Read</span>
          </div>

          <div style={{color: 'var(--color-text-muted)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <p>
              Selecting the right bearing is the most critical mechanical decision in machine design and maintenance. An incorrectly specified bearing will inevitably lead to premature failure, excessive heat generation, vibration, and ultimately, catastrophic downtime.
            </p>

            <h2 style={{color: 'var(--color-text)', marginTop: '1.5rem'}}>1. Understanding Load Direction and Magnitude</h2>
            <p>
              The first step in bearing selection is identifying the primary load vector. Is the load strictly radial (perpendicular to the shaft), strictly axial/thrust (parallel to the shaft), or a combination of both?
              <ul>
                <li><strong>Radial Loads:</strong> Deep groove ball bearings or cylindrical roller bearings are best suited here. Deep groove ball bearings handle moderate radial loads, while cylindrical rollers handle massive heavy-duty radial forces.</li>
                <li><strong>Axial Loads:</strong> Thrust bearings are designed specifically for purely axial loads.</li>
                <li><strong>Combined Loads:</strong> Tapered roller bearings or angular contact ball bearings excel when both radial and axial forces are simultaneously applied to the shaft (e.g., in automotive wheel hubs or CNC machining spindles).</li>
              </ul>
            </p>

            <h2 style={{color: 'var(--color-text)', marginTop: '1.5rem'}}>2. Speed Requirements (RPM)</h2>
            <p>
              Not all bearings are rated for high speeds. Roller bearings generally have much higher load capacities than ball bearings, but ball bearings have much lower friction, allowing them to spin at significantly higher RPMs without overheating. If you are replacing a spindle bearing in a CNC router operating at 24,000 RPM, you must use high-precision angular contact ball bearings, not standard rollers.
            </p>

            <h2 style={{color: 'var(--color-text)', marginTop: '1.5rem'}}>3. Operating Environment</h2>
            <p>
              The environment dictates the material sealing mechanisms required.
              <br/><br/>
              <strong>Temperature:</strong> Standard bearings operate safely up to 120°C. For applications in furnaces or chemical plants exceeding this, you must specify high-temperature bearings with specialty Viton oil seals and synthetic fluorinated greases.
              <br/><br/>
              <strong>Contamination:</strong> In agricultural machines or cement plants in Ludhiana, dust is the enemy. Utilizing bearings with robust double-lip rubber seals (2RS) instead of metal shields (ZZ) is mandatory to prevent microscopic grit from destroying the raceways.
            </p>

            <h2 style={{color: 'var(--color-text)', marginTop: '1.5rem'}}>Key Takeaway</h2>
            <p>
              If you are unsure of exactly which specification your machine requires, consulting the experts is the most cost-effective path. At <strong>Fine Bearing & Oil Seal Store</strong>, our technical team analyzes your precise operational parameters to supply the exact component necessary. Contact us on WhatsApp for immediate technical assistance.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
