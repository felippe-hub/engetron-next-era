import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

const categories = ["Todos", "Online", "Line-Interactive", "Industrial"];

const products = [
  {
    name: "Safe Power",
    category: "Online",
    range: "1 a 3 kVA",
    description: "Proteção online dupla conversão para servidores, redes e equipamentos sensíveis.",
    highlight: "Dupla Conversão",
  },
  {
    name: "Safe Server",
    category: "Online",
    range: "6 a 20 kVA",
    description: "Solução escalável para data centers de pequeno e médio porte com gerenciamento inteligente.",
    highlight: "Escalável",
  },
  {
    name: "Safe Max",
    category: "Online",
    range: "20 a 200 kVA",
    description: "Alta potência com paralelismo para data centers e missão crítica de grande porte.",
    highlight: "Paralelismo",
  },
  {
    name: "Safe Gate",
    category: "Online",
    range: "200 a 800 kVA",
    description: "O mais robusto da linha. Modular e escalável para infraestruturas de altíssima disponibilidade.",
    highlight: "Modular",
  },
  {
    name: "Safe Station",
    category: "Line-Interactive",
    range: "0.6 a 3 kVA",
    description: "Proteção inteligente para estações de trabalho, automação comercial e redes.",
    highlight: "Compacto",
  },
  {
    name: "Safe Industrial",
    category: "Industrial",
    range: "10 a 80 kVA",
    description: "Projetado para ambientes industriais severos com grau de proteção elevado e protocolo Modbus.",
    highlight: "IP54",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="section-padding relative">
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Portfólio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Linha completa de Nobreaks
          </h2>
          <p className="text-muted-foreground text-lg">
            De 600VA a 800kVA. Encontre a solução ideal para sua operação.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
            >
              {/* Visual header */}
              <div className="h-48 bg-gradient-to-br from-surface to-card flex items-center justify-center relative">
                <div className="h-20 w-16 rounded-lg border border-border/50 bg-background/30 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                  {product.highlight}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display font-semibold text-foreground">{product.name}</h3>
                  <span className="text-xs text-muted-foreground">{product.range}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                <Button variant="ghost" size="sm" className="group/btn text-primary p-0 h-auto hover:bg-transparent">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
