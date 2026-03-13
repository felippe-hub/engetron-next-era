import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "IoT", href: "#iot" },
  { label: "Setores", href: "#setores" },
  { label: "Cases", href: "#cases" },
  { label: "Fale Conosco", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-engetron-dark">
        <div className="container mx-auto flex h-8 items-center justify-between text-xs">
          <span className="text-muted-foreground/70 hidden sm:block" style={{ color: 'hsl(0,0%,70%)' }}>
            Desde 1976 — Energia Garantida com tecnologia 100% nacional
          </span>
          <div className="flex items-center gap-4 ml-auto" style={{ color: 'hsl(0,0%,70%)' }}>
            <a href="#" className="hover:underline">Loja Virtual</a>
            <a href="#" className="hover:underline">Portal do Parceiro</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">
            Engetron
          </span>
          <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
            energia<br />garantida
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero" size="sm">
            Solicite um Orçamento
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-2 w-full">
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
