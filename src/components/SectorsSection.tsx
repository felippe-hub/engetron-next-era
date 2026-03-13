import { Server, HeartPulse, Factory, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const sectors = [
  {
    icon: Server,
    title: "Data Centers",
    tagline: "Alta disponibilidade para operações 24/7",
    description: "Soluções de 10kVA a 825kVA com paralelismo de capacidade e redundância. Monitoramento IoT completo de toda a cadeia de energia, otimizando PUE e reduzindo custos operacionais.",
    features: ["Paralelismo até 6,6 MVA", "Monitoramento IoT", "5 anos de garantia"],
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    tagline: "Proteção contínua para vidas",
    description: "Equipamentos com transferência em 0ms para UTIs, centros cirúrgicos e equipamentos de diagnóstico por imagem. Confiabilidade comprovada nos principais hospitais do Brasil.",
    features: ["Transferência 0ms", "Onda senoidal pura", "Autonomia estendida"],
  },
  {
    icon: Factory,
    title: "Indústria 4.0",
    tagline: "Produção ininterrupta com integração SCADA",
    description: "Nobreaks industriais para ambientes severos. Integração nativa com PLCs e sistemas SCADA via protocolo Modbus/TCP para automação completa.",
    features: ["Modbus/TCP", "Ambiente industrial", "Corrente senoidal"],
  },
  {
    icon: Building2,
    title: "Corporativo",
    tagline: "Continuidade de negócios garantida",
    description: "Desde estações de trabalho até servidores de missão crítica. Linha completa de 700VA a 825kVA com gestão centralizada via IoT.",
    features: ["Rack e torre", "Gestão IoT", "Bivolt automático"],
  },
];

const SectorsSection = () => {
  return (
    <section id="setores" className="section-padding bg-surface-warm relative grid-pattern overflow-hidden">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Setores de Atuação</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Soluções especializadas{" "}
            <span className="text-gradient-red">por segmento</span>
          </h2>
          <p className="text-muted-foreground">
            Cada setor tem necessidades únicas. Nossa engenharia dimensiona a solução ideal para sua operação.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group bg-card border border-border rounded-lg p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start gap-5">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <sector.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{sector.tagline}</p>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full border border-border bg-background text-muted-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:text-primary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
