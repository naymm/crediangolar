import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import ChairmanMessage from "./pages/ChairmanMessage";
import ReportsAndAccounts from "./pages/ReportsAndAccounts";
import Contact from "./pages/Contact";
import Simulator from "./pages/Simulator";
import Organogram from "./pages/Organogram";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:slug" element={<ProductPage />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/mensagem-pca" element={<ChairmanMessage />} />
          <Route path="/relatorio-contas" element={<ReportsAndAccounts />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/simulador" element={<Simulator />} />
          <Route path="/organograma" element={<Organogram />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
