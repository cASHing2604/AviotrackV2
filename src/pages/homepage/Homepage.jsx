import React, { useEffect, useRef } from 'react';
import About from '../../components/Homepage/About';
import Contact from '../../components/Homepage/Contact';
import Hero from '../../components/Homepage/Hero';

const HomePage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const { hash } = window.location;
    if (hash === '#contact' || hash === '#about') {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    if (mapRef.current && navigator.geolocation && window.google) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 14,
        });
        new window.google.maps.Marker({ position: { lat: latitude, lng: longitude }, map });
      });
    }
  }, []);

  return (
    <div>
      <Hero />

      {/*  IMAGE SECTION EDIT THE SRC TO CHANGE PIC  */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-12">
        <div className="relative max-w-screen-xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1485310818226-f01c4269687f?q=80&w=2940&auto=format&fit=crop"
            alt="Man in safety vest under structure"
            className="w-full h-64 sm:h-96 lg:h-[700px] object-cover rounded-3xl"
          />
          <div className="absolute inset-0 rounded-3xl bg-blue-900 opacity-50" />
        </div>
      </section>

      <Contact />
      <About />
    </div>
  );
};

export default HomePage;
