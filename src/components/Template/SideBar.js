import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Rishi Bajargan</h2>
        <p><a href="mailto:rishibajargan@gmail.com">rishibajargan@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rishi. 
        I am a <a href="https://www.bits-pilani.ac.in/">BITS Pilani</a> graduate and
        currently working at <a href="https://publicissapient.com">Publicis Sapient</a> as a Senior Associate Data Scientist. Mesmerized by the beauty of Transformer models in various tasks, it's just winsome!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Rishi Bajargan.</p>
    </section>
  </section>
);

export default SideBar;
