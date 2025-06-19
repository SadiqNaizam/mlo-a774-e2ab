import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div>
          <p>&copy; {currentYear} AuthSecure. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
          <Link to="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;