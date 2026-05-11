// Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 text-white">
      <div className="flex flex-col sm:flex-row py-3 justify-center text-base">
        © {new Date().getFullYear()}&nbsp;
        <Link to="/contact" className="underline hover:text-green-100 transition-colors">
          Robert Morrison
        </Link>
        &nbsp;· All Rights Reserved
      </div>
    </footer>
  );
}