import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Camera,
  ShieldCheck,
  BellRing,
  Volume2,
  Cable,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  Wrench,
  Building2,
  Home,
  Store,
  LockKeyhole,
  ChevronRight
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: <Camera />,
    title: 'Camera Systems',
    text: 'Clean CCTV and IP camera installs for homes, offices, warehouses, restaurants, and retail spaces.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Access Control',
    text: 'Keypads, card readers, door strikes, maglocks, and secure entry systems built for daily use.',
  },
  {
    icon: <BellRing />,
    title: 'Alarm Systems',
    text: 'Reliable intrusion alarms, sensors, panels, and smart alerts for residential and commercial properties.',
  },
  {
    icon: <Volume2 />,
    title: 'Sound Systems',
    text: 'Background music and paging systems for restaurants, offices, retail, and commercial spaces.',
  },
];

const sectors = [
  { icon: <Home />, title: 'Homes & Acreages', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { icon: <Store />, title: 'Restaurants & Retail', image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80' },
  { icon: <Building2 />, title: 'Offices & Warehouses', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80' },
];

const processSteps = [
  'Site walk-through and system planning',
  'Clean wiring, mounting, and device setup',
  'Testing, handover, and after-service support',
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="LoVolt home">
          <span className="brand-mark"><LockKeyhole /></span>
          <span>
            <strong>LoVolt</strong>
            <small>Low Voltage Systems</small>
          </span>
        </a>

        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#work">Spaces</a>
          <a onClick={() => setOpen(false)} href="#process">Process</a>
          <a onClick={() => setOpen(false)} href="#contact">Quote</a>
        </nav>

        <a className="header-call" href="tel:15877036056">Call Now <ChevronRight /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-copy reveal">
        <p className="eyebrow"><Cable /> Property Surveillance & Security Systems</p>
        <h1>Security systems that look professional, work reliably, and don’t feel cheap.</h1>
        <p className="hero-text">
          LoVolt installs and services camera systems, access control, alarms, and sound systems for homes and businesses.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="tel:15877036056">Call Jigar <ArrowRight /></a>
          <a className="btn secondary" href="#services">Explore Services</a>
        </div>
      </div>

      <div className="hero-visual reveal delay-1" aria-label="3D security camera animation">
        <div className="orbit-ring"></div>
        <div className="camera-3d">
          <div className="cam-body">
            <span className="lens"></span>
            <span className="glow"></span>
          </div>
          <div className="cam-arm"></div>
          <div className="cam-base"></div>
        </div>
        <div className="floating-card card-one"><Camera /> CCTV</div>
        <div className="floating-card card-two"><ShieldCheck /> Access</div>
        <div className="floating-card card-three"><BellRing /> Alarm</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services section-pad">
      <div className="section-heading reveal">
        <p className="eyebrow">What LoVolt does</p>
        <h2>Installation, sales, and service under one roof.</h2>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" style={{ animationDelay: `${index * 0.08}s` }} key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work section-pad">
      <div className="section-heading reveal">
        <p className="eyebrow">Built for real spaces</p>
        <h2>Residential and commercial systems that fit the property.</h2>
      </div>

      <div className="sector-grid">
        {sectors.map((item, index) => (
          <article className="sector-card reveal" style={{ animationDelay: `${index * 0.08}s` }} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="sector-overlay">
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="process section-pad">
      <div className="process-card reveal">
        <div>
          <p className="eyebrow"><Wrench /> Simple project flow</p>
          <h2>No overcomplicated sales talk. Just a clean install plan.</h2>
          <p>
            The website positions LoVolt as practical and trustworthy: inspect the site, install cleanly, test properly, then support the client after the job.
          </p>
        </div>
        <div className="steps">
          {processSteps.map((step) => (
            <div className="step" key={step}>
              <CheckCircle2 />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-panel reveal">
        <div>
          <p className="eyebrow">Get a quote</p>
          <h2>Ready to secure your property?</h2>
          <p>Send the site details, property type, and what system you need. LoVolt can quote installation, sales, and service work.</p>
        </div>

        <div className="contact-list">
          <a href="tel:15877036056"><Phone /> 587-703-6056</a>
          <a href="mailto:info@lovolt.ca"><Mail /> info@lovolt.ca</a>
          <a href="https://www.lovolt.ca" target="_blank" rel="noreferrer"><Globe /> www.lovolt.ca</a>
          <span><MapPin /> Calgary & surrounding areas</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home" aria-label="LoVolt home">
              <span className="brand-mark"><LockKeyhole /></span>
              <span>
                <strong>LoVolt</strong>
                <small>Installation • Sales • Service</small>
              </span>
            </a>
            <p>Professional camera, access control, alarm, and sound system installs for Calgary homes and businesses.</p>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#services">Camera Systems</a>
            <a href="#services">Access Control</a>
            <a href="#services">Alarm Systems</a>
            <a href="#services">Sound Systems</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#work">Property Types</a>
            <a href="#process">Process</a>
            <a href="#contact">Get a Quote</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <a href="tel:15877036056"><Phone /> 587-703-6056</a>
            <a href="mailto:info@lovolt.ca"><Mail /> info@lovolt.ca</a>
            <a href="https://www.lovolt.ca" target="_blank" rel="noreferrer"><Globe /> lovolt.ca</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} LoVolt. All rights reserved.</p>
            <p>Calgary & surrounding areas</p>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
