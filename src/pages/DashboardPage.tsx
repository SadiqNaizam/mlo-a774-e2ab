import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // In a real app, user info might come from auth context or a store
  const userInfo = {
    name: "Valued User", 
    email: "user@example.com" 
  };

  // Placeholder action for the button
  const handleViewProfile = () => {
    // Example: navigate to a profile page if it exists
    // For now, just a log, as /profile isn't defined in App.tsx
    console.log("Navigate to profile page - (not implemented in App.tsx)");
    // navigate('/profile'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header isAuthenticated={true} />

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Welcome to Your Dashboard, {userInfo.name}!</CardTitle>
            <CardDescription className="text-md text-gray-600 dark:text-gray-400 pt-2">
              You have successfully logged in. Here's a quick overview.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700">
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>Authentication Confirmed:</strong> Your session is active.
              </p>
            </div>

            <div>
              <Label htmlFor="userNotes" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Quick Notes</Label>
              <Textarea 
                id="userNotes"
                placeholder="Jot down anything important..." 
                className="mt-1 min-h-[100px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700" 
              />
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleViewProfile} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Profile (Placeholder)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Your registered email: {userInfo.email}</p>
              <p>Need to manage your account or explore other features? Use the navigation options.</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;