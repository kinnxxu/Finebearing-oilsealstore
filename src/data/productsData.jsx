import { Settings, ShieldCheck, Box, Wrench } from 'lucide-react';

export const productsData = {
  'bearings': {
    title: 'Industrial Bearings',
    image: '/bearings.png',
    icon: <Settings />,
    description: 'Our extensive range of high-precision bearings is sourced from world-leading manufacturers to ensure maximum performance and longevity in the most demanding industrial environments.',
    subProducts: [
      { name: 'Deep Groove Ball Bearings', detail: 'The most common type, versatile and suitable for high speeds.' },
      { name: 'Tapered Roller Bearings', detail: 'Designed to handle combined heavy radial and axial loads.' },
      { name: 'Spherical Roller Bearings', detail: 'Self-aligning bearings ideal for heavy-duty applications with shaft misalignment.' },
      { name: 'Needle Roller Bearings', detail: 'High load carrying capacity in a very small radial space.' },
      { name: 'Thrust Bearings', detail: 'Specifically designed to manage high axial (thrust) loads.' },
      { name: 'Precision CNC Spindle Bearings', detail: 'Ultra-high precision for machine tool spindles.' }
    ]
  },
  'oil-seals': {
    title: 'Premium Oil Seals',
    image: '/seals.png',
    icon: <ShieldCheck />,
    description: 'We provide a comprehensive selection of oil seals and sealing solutions that prevent leakage and protect your machinery from contamination.',
    subProducts: [
      { name: 'Nitrile (NBR) Oil Seals', detail: 'Standard all-purpose seals with excellent oil resistance.' },
      { name: 'Viton (FKM) High-Temp Seals', detail: 'Superior chemical and heat resistance for extreme environments.' },
      { name: 'Silicone Seals', detail: 'Excellent for high-temperature and food-grade applications.' },
      { name: 'Metal-Cased Seals', detail: 'Heavy-duty protection for aggressive industrial settings.' },
      { name: 'Mechanical Seals', detail: 'Precision components for rotating shafts in pumps and mixers.' }
    ]
  },
  'hydraulic': {
    title: 'Hydraulic Products',
    image: '/hydraulics.png',
    icon: <Box />,
    description: 'High-pressure hydraulic components engineered for reliability and efficiency in fluid power systems.',
    subProducts: [
      { name: 'Hydraulic Pumps', detail: 'Vane, gear, and piston pumps for high-performance fluid delivery.' },
      { name: 'Control Valves', detail: 'Directional, pressure, and flow control valves for precise system management.' },
      { name: 'High-Pressure Hoses', detail: 'Wire-braided and spiral hoses with custom fittings.' },
      { name: 'Hydraulic Cylinders', detail: 'Standard and custom-built actuators for heavy lifting and motion.' },
      { name: 'Fittings & Adapters', detail: 'Leak-free connections for all industrial hydraulic standards.' }
    ]
  },
  'cnc': {
    title: 'CNC Machine Spare Parts',
    image: '/cnc.png',
    icon: <Wrench />,
    description: 'Minimize downtime with our ready-to-ship inventory of critical CNC machine components.',
    subProducts: [
      { name: 'Precision Ball Screws', detail: 'High-accuracy motion control parts for CNC axis movement.' },
      { name: 'Linear Guideways', detail: 'Smooth and precise rails for machine tool slides.' },
      { name: 'Machine Spindles', detail: 'High-speed spindles and replacement kits.' },
      { name: 'Servo Couplings', detail: 'Backlash-free couplings for motor-to-screw connections.' },
      { name: 'CNC Tool Holders', detail: 'BT, SK, and HSK standards for advanced milling.' }
    ]
  }
};
