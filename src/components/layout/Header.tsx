import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, LogIn, LogOut, UserPlus, LayoutDashboard } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean; // Optional: to simulate auth state. In a real app, this would come from context/state.
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false }) => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">AuthSecure</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={navLinkClasses}>
                <LayoutDashboard className="h-4 w-4 mr-2 inline-block md:hidden" />
                <span className="hidden md:inline">Dashboard</span>
              </NavLink>
              <Button variant="outline" size="sm" asChild>
                <Link to="/"> {/* Assuming logout redirects to login page */}
                  <LogOut className="h-4 w-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Logout</span>
                </Link>
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/" className={navLinkClasses}>
                <LogIn className="h-4 w-4 mr-2 inline-block md:hidden" />
                 <span className="hidden md:inline">Login</span>
              </NavLink>
              <Button variant="default" size="sm" asChild>
                <Link to="/registration">
                  <UserPlus className="h-4 w-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Register</span>
                </Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;