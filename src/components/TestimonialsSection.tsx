import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Engetron é nossa parceira estratégica há mais de 10 anos. A disponibilidade e o suporte técnico são excepcionais.",
    name: "Carlos Mendes",
    title: "Diretor de TI — Hospital São Lucas",
    sector: "Saúde",
  },
  {
    quote: "Com o IoT da Engetron, reduzimos nossos custos de manutenção em 35% e eliminamos paradas não planejadas.",
    name: "Fernanda Oliveira",
    title: "Gerente de Infraestrutura — TechData",
    sector: "Data Center",
  },
  {
    quote: "A integração via Modbus com nosso SCADA foi perfeita. Os nobreaks industriais suportam nosso ambiente 24/7.",
    name: "Roberto Lima",
    title: "Engenheiro de Automação — Metalúrgica Forte",
    sector: "Indústria",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Quem confia na Engetron
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 relative">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
              <span className="absolute top-6 right-6 text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                {t.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
