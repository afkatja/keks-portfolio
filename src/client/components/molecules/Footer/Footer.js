import React from 'react';
import { GoOctoface } from 'react-icons/lib/go';
import { FaFacebookOfficial } from 'react-icons/lib/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="list-plain colophon">
          <li>&copy; 2017</li>
          <li><a href="https://www.facebook.com/keksfoto/"><FaFacebookOfficial /> Anja Keks</a></li>
          <li className="made-by"><a href="afkatja.github.io"><GoOctoface /> Katja Hollaar</a></li>
        </ul>
      </div>
    </footer>
  );
}
