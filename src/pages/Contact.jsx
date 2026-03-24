import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const CONFIGURATION = {
  "locations": [
    {"title":"Fine Bearing & Oil Seal Store – Best Bearing Supplier, Oil Seals, Hydraulic Seal & Products, CNC Machine Spares","address1":"Share Punjab Building, Link Road","address2":"Ludhiana, Punjab, India","coords":{"lat":30.891947,"lng":75.8671232},"placeId":"ChIJFzLwlv-CGjkRG6CsaYxpQTY"}
  ],
  "mapOptions": {"center":{"lat":30.891947,"lng":75.8671232},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":12,"zoomControl":true,"maxZoom":17,"mapId":""},
  "mapsApiKey": "YOUR_API_KEY_HERE",
  "capabilities": {"input":true,"autocomplete":true,"directions":true,"distanceMatrix":true,"details":true,"actions":false}
};

export default function Contact() {
  return (
    <div className="page" style={{paddingTop: '6rem'}}>
      <Helmet>
        <title>Contact Fine Bearing & Oil Seal Store | Ludhiana</title>
        <meta name="description" content="Contact the best bearing supplier in Ludhiana. Locate Fine Bearing & Oil Seal Store in Dholewal. Call or WhatsApp for urgent industrial requirements." />
        <style>{`
          gmpx-store-locator {
            width: 100%;
            height: 100%;
            --gmpx-color-surface: var(--color-surface);
            --gmpx-color-on-surface: var(--color-text);
            --gmpx-color-on-surface-variant: var(--color-text-muted);
            --gmpx-color-primary: var(--color-primary-dark);
            --gmpx-color-outline: var(--color-border);
            --gmpx-font-family-base: var(--font-body);
            --gmpx-font-family-headings: var(--font-heading);
          }
        `}</style>
      </Helmet>

      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title">Get In <span>Touch</span></h1>
            
            <div className="grid-2">
              <div className="glass" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
                <h2 style={{marginBottom: '2rem'}}>Contact Info</h2>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                    <div style={{padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', flexShrink: 0}}>
                      <MapPin size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.1rem', marginBottom: '0.3rem'}}>Store Area</h3>
                      <p style={{color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.4'}}>
                        Share Punjab Building, Link Road<br/>
                        Dholewal, Ludhiana, India
                      </p>
                    </div>
                  </div>

                   <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                    <div style={{padding: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', flexShrink: 0}}>
                      <Phone size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.1rem', marginBottom: '0.3rem'}}>Phone</h3>
                      <a href="tel:+918146119761" style={{color: 'var(--color-text)', fontWeight: 'bold', fontSize: '1.1rem'}}>+91 8146119761</a>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                    <div style={{padding: '0.8rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '50%', flexShrink: 0}}>
                      <MessageCircle size={24} color="#25D366" />
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.1rem', marginBottom: '0.3rem'}}>WhatsApp</h3>
                      <a href="https://wa.me/918146119761" target="_blank" rel="noreferrer" className="btn" style={{marginTop: '0.5rem', backgroundColor: '#25D366', color: 'white', display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem'}}>Chat Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass" style={{padding: '1rem', overflow: 'hidden', minHeight: 'clamp(300px, 50vh, 600px)', display: 'flex', flexDirection: 'column'}}>
                <h3 style={{padding: '1rem 2rem', margin: 0, fontSize: '1.2rem'}}>Google Maps</h3>
                <div style={{flex: 1, width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden', position: 'relative'}}>
                  <iframe 
                    title="Fine Bearing Ludhiana Map"
                    src="https://maps.google.com/maps?q=30.891947,75.8671232&z=15&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0, filter: 'grayscale(0.5) invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(1.2)'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
