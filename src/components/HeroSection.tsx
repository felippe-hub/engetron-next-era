import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import productImage from "@/assets/rack-ti.png";
import CountUp from "./CountUp";

const HeroSection = () => {
  return (
    <section className="relative bg-engetron-dark overflow-hidden" style={{ paddingTop: "calc(2rem + 88px)" }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(350,82%,42%) 1px, transparent 1px), linear-gradient(90deg, hsl(350,82%,42%) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, hsl(350,82%,42%), transparent)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, hsl(20,90%,50%), transparent)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{ borderColor: 'hsl(0,0%,30%)', color: 'hsl(0,0%,70%)' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Fabricação 100% Nacional — Desde 1976
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-display font-bold leading-[1.1] tracking-tight"
              style={{ color: 'hsl(0,0%,100%)' }}
            >
              Sua operação não pode parar.{" "}
              <span className="text-gradient-red">
                Energia garantida
              </span>{" "}
              para infraestruturas críticas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg max-w-lg leading-relaxed"
              style={{ color: 'hsl(0,0%,70%)' }}
            >
              Nobreaks e UPS de alta performance com IoT integrado. Soluções de 1kVA a 825kVA com até 5 anos de garantia, suporte técnico direto do fabricante e monitoramento inteligente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button variant="hero" size="lg" className="text-base group">
                Encontre seu Nobreak
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base" style={{ borderColor: 'hsl(0,0%,30%)', color: 'hsl(0,0%,85%)' }}>
                Solicite um Orçamento
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t"
              style={{ borderColor: 'hsl(0,0%,20%)' }}
            >
              {[
                { value: "48+", label: "Anos de experiência" },
                { value: "50000+", label: "Unidades instaladas" },
                { value: "5", label: "Anos garantia trifásicos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <CountUp value={stat.value} className="text-2xl sm:text-3xl font-display font-bold text-gradient-red" />
                  <p className="text-xs mt-1" style={{ color: 'hsl(0,0%,55%)' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.15]" style={{ background: 'hsl(350,82%,42%)' }} />
            </div>
            <motion.img
              src={productImage}
              alt="Rack TI Engetron com Nobreak integrado"
              className="relative z-10 max-h-[500px] w-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />
    </section>
  );
};

export default HeroSection;
