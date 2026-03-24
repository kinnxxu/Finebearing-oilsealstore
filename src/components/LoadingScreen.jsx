import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      }}
    >
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: 0,
            border: '8px solid rgba(212, 175, 55, 0.1)',
            borderRadius: '50%',
            borderTopColor: '#D4AF37',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
          }}
        />
        
        {/* Inner Rotating Bearing Part */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Creating 'balls' of the bearing */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                background: 'radial-gradient(circle at 30% 30%, #FBF2C1, #D4AF37)',
                borderRadius: '50%',
                transform: `rotate(${i * 45}deg) translateY(-35px)`,
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
              }}
            />
          ))}
          
          {/* Inner ring */}
          <div style={{
            width: '45px',
            height: '45px',
            border: '4px solid #D4AF37',
            borderRadius: '50%',
            background: 'transparent'
          }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <h2 style={{ 
          margin: 0, 
          color: '#D4AF37', 
          fontSize: '1.5rem', 
          letterSpacing: '4px',
          fontWeight: 800,
          textTransform: 'uppercase'
        }}>
          Fine Bearing
        </h2>
        <div style={{ 
          width: '40px', 
          height: '2px', 
          background: '#D4AF37', 
          margin: '10px auto',
          borderRadius: '1px'
        }} />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
