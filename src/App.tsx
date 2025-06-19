import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/RegistrationPage"; // Component is now SignUpPage, file remains RegistrationPage.tsx
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} /> {/* Default route is Sign Up */}
          <Route path="/login" element={<LoginPage />} /> {/* Login page is now at /login */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          {/* Keep original /registration path for SignUpPage if needed, or remove if / is sole entry */}
          {/* For this conversion, / will be the main sign up page. No separate /registration route. */}
          
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;