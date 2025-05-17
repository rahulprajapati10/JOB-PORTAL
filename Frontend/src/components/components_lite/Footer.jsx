import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-base sm:text-lg font-semibold">
          © 2025 MyJobPortal. All rights reserved.
        </p>
        <p className="text-sm sm:text-base">
          Powered by{' '}
          <a
            href="https://github.com/rahulprajapati10"
            className="text-[#6A38C2] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rahul Prajapati
          </a>
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <Link to="/PrivacyPolicy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/TermsofServices" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
          {/* Uncomment and customize below if you want contact info */}
          {/* <span className="text-black">Contact Us: 123-456-7890</span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
