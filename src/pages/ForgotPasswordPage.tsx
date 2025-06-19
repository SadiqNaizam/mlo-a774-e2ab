import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { KeyRound, Mail, AlertTriangle } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  // const navigate = useNavigate(); // useNavigate is imported but not used, can be removed if not planned for use.

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    setFormError(null);
    console.log('Password reset requested for:', data.email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/failure
    if (data.email === "test@example.com") { // Simulate known email
      toast.success("Password reset instructions sent!", {
        description: `If an account exists for ${data.email}, you will receive an email with instructions.`,
      });
      form.reset();
    } else if (data.email === "error@example.com") { // Simulate server error
        setFormError("An unexpected error occurred. Please try again later.");
    }
    else { // Simulate email not found
      toast.success("Password reset instructions sent!", {
         description: `If an account exists for ${data.email}, you will receive an email with instructions.`,
      });
      form.reset();
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      <main className="flex-grow">
        <AuthFormCard
          title="Forgot Your Password?"
          description="Enter your email address below. If an account exists for that email, we'll send you instructions to reset your password."
          logo={<KeyRound className="h-12 w-12 text-primary" />}
          footerContent={
            <p className="text-sm text-muted-foreground">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline"> {/* Link to Login page */}
                Back to Login
              </Link>
            </p>
          }
        >
          <Form {...form}>\n            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {formError && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}\n              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;