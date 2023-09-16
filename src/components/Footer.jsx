import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-item">
          <p>Office</p>
          <br />
          <p>Phone</p>
          <p>Email</p>
          <p>Website</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-item">
          <p>Jl. Danau Maninjau Raya No. 29 Sawojajar,</p>
          <p>Kedungkandang, Kota Malang, Jawa Timur - Indonesia 65139</p>
          <p>(0341) 302 1661</p>
          <p>info@sekawanmedia.co.id</p>
          <p>www.sekawanmedia.co.id</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
