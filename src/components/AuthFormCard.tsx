import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormCardProps {
  title: string;
  description?: string;
  children: React.ReactNode; // For the form elements
  logo?: React.ReactNode; // Optional logo element
  footerContent?: React.ReactNode; // Optional content for the footer (e.g., links)
  className?: string; // Optional additional class names
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  children,
  logo,
  footerContent,
  className,
}) => {
  console.log(`AuthFormCard loaded for title: ${title}`);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 ${className}`}>
      {logo && <div className="mb-6">{logo}</div>}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {description && (
            <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter className="flex flex-col items-center justify-center pt-4 border-t">
            {footerContent}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AuthFormCard;