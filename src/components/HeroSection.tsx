import { Button } from "@/components/ui/button";
import { Shield, Activity, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Tecnologia 100% Nacional
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
              Sua operação{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(217,91%,70%)]">
                não pode parar.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Proteção inteligente para infraestruturas críticas. Nobreaks de alta performance com IoT integrado para{" "}
              <span className="text-foreground font-medium">disponibilidade total</span> e{" "}
              <span className="text-foreground font-medium">gestão preditiva</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Falar com Especialista
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8">
                Ver Soluções
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { value: "35+", label: "Anos de mercado" },
                { value: "99.9%", label: "Disponibilidade" },
                { value: "50k+", label: "Unidades instaladas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - UPS Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl scale-110" />
              
              {/* UPS illustration */}
              <div className="relative bg-card/80 backdrop-blur border border-border rounded-2xl p-8 animate-float">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-b from-[hsl(220,40%,13%)] to-[hsl(220,40%,8%)] border border-border/50 flex flex-col items-center justify-between p-6 overflow-hidden">
                  {/* Top panel */}
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-semibold text-muted-foreground tracking-widest uppercase">Engetron</span>
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
                    </div>
                    <div className="h-px w-full bg-border/50" />
                  </div>

                  {/* LCD Display */}
                  <div className="w-full rounded-lg border border-primary/30 bg-[hsl(220,50%,8%)] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-primary font-mono">
                      <span>INPUT</span>
                      <span>220V</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-accent font-mono">
                      <span>OUTPUT</span>
                      <span>220V</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>LOAD</span>
                      <span>42%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
                      <div className="h-full w-[42%] rounded-full gradient-accent" />
                    </div>
                  </div>

                  {/* Status icons */}
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <Shield className="h-5 w-5 text-accent" />
                    <Activity className="h-5 w-5 text-primary animate-data-flow" />
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Bottom vent pattern */}
                  <div className="w-full grid grid-cols-8 gap-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="h-1 rounded-full bg-border/30" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-foreground">Online</span>
                </div>
              </div>
              <div className="absolute -right-4 top-2/3 bg-card border border-border rounded-lg px-3 py-2 shadow-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">IoT Ativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
