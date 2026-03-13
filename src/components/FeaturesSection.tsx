import { Shield, Wifi, Factory, Leaf, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Disponibilidade Total",
    description: "Sistemas redundantes com transferência em 0ms. Sua operação protegida 24/7 contra qualquer falha de energia.",
    accent: true,
  },
  {
    icon: Wifi,
    title: "IoT Integrado",
    description: "Monitoramento remoto em tempo real. Receba alertas preditivos e gerencie toda sua infraestrutura de qualquer lugar.",
    accent: false,
  },
  {
    icon: BarChart3,
    title: "Gestão Preditiva",
    description: "Inteligência artificial que antecipa falhas antes que aconteçam. Reduza custos de manutenção em até 40%.",
    accent: false,
  },
  {
    icon: Factory,
    title: "Fabricação Nacional",
    description: "Tecnologia própria com engenharia 100% brasileira. Suporte técnico direto do fabricante em todo território.",
    accent: false,
  },
  {
    icon: Leaf,
    title: "Eficiência Energética",
    description: "Rendimento acima de 96%. Reduza seu consumo energético e a pegada de carbono da sua operação.",
    accent: true,
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe de engenheiros especializados disponível a qualquer momento para garantir a continuidade da sua operação.",
    accent: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="solucoes" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Diferenciais</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Engenharia de missão crítica
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada componente projetado para garantir que a sua infraestrutura nunca pare.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg mb-5 ${
                feature.accent
                  ? 'bg-accent/10 text-accent'
                  : 'bg-primary/10 text-primary'
              }`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
