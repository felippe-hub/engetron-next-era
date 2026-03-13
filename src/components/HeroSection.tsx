import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import productImage from "@/assets/rack-ti.png";

const HeroSection = () => {
  return (
    <section className="relative bg-engetron-dark overflow-hidden" style={{ paddingTop: "calc(2rem + 88px)" }}>
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium" style={{ borderColor: 'hsl(0,0%,30%)', color: 'hsl(0,0%,70%)' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
              Fabricação 100% Nacional — Desde 1976
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-display font-bold leading-[1.1] tracking-tight" style={{ color: 'hsl(0,0%,100%)' }}>
              Sua operação não pode parar.{" "}
              <span className="text-primary">
                Energia garantida
              </span>{" "}
              para infraestruturas críticas.
            </h1>

            <p className="text-base sm:text-lg max-w-lg leading-relaxed" style={{ color: 'hsl(0,0%,70%)' }}>
              Nobreaks e UPS de alta performance com IoT integrado. Soluções de 1kVA a 825kVA com até 5 anos de garantia, suporte técnico direto do fabricante e monitoramento inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="hero" size="lg" className="text-base">
                Encontre seu Nobreak
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base" style={{ borderColor: 'hsl(0,0%,30%)', color: 'hsl(0,0%,85%)' }}>
                Solicite um Orçamento
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: 'hsl(0,0%,20%)' }}>
              {[
                { value: "48+", label: "Anos de experiência" },
                { value: "50 mil+", label: "Unidades instaladas" },
                { value: "5 anos", label: "Garantia trifásicos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: 'hsl(0,0%,55%)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product image */}
          <div className="relative flex items-center justify-center">
            <img
              src={productImage}
              alt="Rack TI Engetron com Nobreak integrado"
              className="relative z-10 max-h-[500px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
