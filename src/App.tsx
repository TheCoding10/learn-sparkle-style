import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import your course pages
import Math from "./pages/Math";
import CS from "./pages/CS";
import Finance from "./pages/Finance";
import Physics from "./pages/Physics";

// ✅ Import the ScrollToTop helper
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* ✅ Force scroll to top on every route change */}
          <Route path="*" element={<ScrollToTop />} />

          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Course Pages */}
          <Route path="/math" element={<Math />} />
          <Route path="/computer-science" element={<CS />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/physics" element={<Physics />} /> {/* ✅ Updated route */}

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
