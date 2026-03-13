import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

import productDwmm from "@/assets/product-dwmm.png";
import productDwMono from "@/assets/product-dw-mono.jpg";
import productDwTrimono from "@/assets/product-dw-trimono.jpg";
import productTrifasico from "@/assets/product-trifasico.png";
import productCompacta from "@/assets/product-compacta.png";
import productVolt from "@/assets/product-volt.png";

const categories = ["Todos", "Trifásicos", "Monofásicos", "Linha Compacta"];

const products = [
  {
    name: "Double Way Trifásico",
    category: "Trifásicos",
    range: "10 a 825 kVA",
    description: "Nobreaks/UPS IoT online, dupla conversão com alto rendimento. Paralelismo de capacidade e redundância para até 6,6 MVA.",
    image: productTrifasico,
    highlight: "5 anos de garantia",
  },
  {
    name: "DW Monofásico Modular",
    category: "Monofásicos",
    range: "3 a 12 kVA",
    description: "Modular rack/torre, dupla conversão com fator de potência 1.0 ou 0,9. Alto rendimento com tecnologia 3 níveis.",
    image: productDwmm,
    highlight: "Modular",
  },
  {
    name: "DW Monofásico",
    category: "Monofásicos",
    range: "3 a 20 kVA",
    description: "Alimentação monofásica com saída isolada, facilmente configurável. Dupla conversão com bypass estático.",
    image: productDwMono,
    highlight: "Dupla Conversão",
  },
  {
    name: "DW Trimono",
    category: "Monofásicos",
    range: "6 a 25 kVA",
    description: "Elevado MTBF com energia fornecida constantemente pelo inversor. Dois caminhos alternativos de alimentação.",
    image: productDwTrimono,
    highlight: "Alto MTBF",
  },
  {
    name: "Linha Compacta",
    category: "Linha Compacta",
    range: "1 a 5 kVA",
    description: "Energia senoidal pura e alimentação bivolt automática. Alta confiabilidade para estações de trabalho e PDVs.",
    image: productCompacta,
    highlight: "Senoidal Puro",
  },
  {
    name: "Nobreaks Volt",
    category: "Linha Compacta",
    range: "700VA a 1400VA",
    description: "Nobreaks online e senoidais. Ideais para PCs, sistemas de segurança e outras aplicações do dia a dia.",
    image: productVolt,
    highlight: "Online",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Linha de Produtos</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Nobreaks/UPS IoT para{" "}
            <span className="text-gradient-red">cada necessidade</span>
          </h2>
          <p className="text-muted-foreground">
            De 700VA a 825kVA. Todos com onda senoidal pura e gestão IoT integrada.
          </p>
        </AnimatedSection>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-card border border-border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="h-52 bg-secondary flex items-center justify-center p-6 relative overflow-hidden">
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded bg-primary/10 text-primary backdrop-blur-sm">
                    {product.highlight}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-display font-semibold text-foreground">{product.name}</h3>
                    <span className="text-xs text-muted-foreground font-medium">{product.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link">
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
