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
import DataScience from "./pages/DataScience";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Course Pages */}
          <Route path="/math" element={<Math />} />
          <Route path="/computer-science" element={<CS />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/data-science" element={<DataScience />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
