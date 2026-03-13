import { Server, HeartPulse, Factory } from "lucide-react";

const sectors = [
  {
    icon: Server,
    title: "Data Centers",
    tagline: "Zero downtime. Sempre.",
    description: "Soluções de 10kVA a 800kVA com redundância N+1, escaláveis para qualquer demanda. Monitoramento IoT em tempo real de toda a cadeia de energia.",
    features: ["Redundância N+1", "Escalável até 800kVA", "PUE otimizado"],
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    tagline: "Vidas dependem de energia.",
    description: "Equipamentos certificados para ambientes hospitalares. Proteção contínua para UTIs, centros cirúrgicos e equipamentos de diagnóstico por imagem.",
    features: ["Certificação hospitalar", "Transferência 0ms", "Bateria estendida"],
  },
  {
    icon: Factory,
    title: "Indústria 4.0",
    tagline: "Produção ininterrupta.",
    description: "Nobreaks industriais projetados para ambientes severos. Integração com PLCs e sistemas SCADA via protocolo Modbus/TCP.",
    features: ["Modbus/TCP", "IP21 a IP54", "Harmônicas < 3%"],
  },
];

const SectorsSection = () => {
  return (
    <section id="setores" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Setores</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Soluções por segmento
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada setor tem necessidades únicas. Nossa engenharia se adapta a todas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group relative bg-card border border-border rounded-2xl p-8 card-hover overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <sector.icon className="h-7 w-7" />
                </div>

                <p className="text-xs font-medium text-accent tracking-wider uppercase mb-2">{sector.tagline}</p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{sector.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{sector.description}</p>

                <div className="flex flex-wrap gap-2">
                  {sector.features.map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full border border-border bg-background/50 text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
