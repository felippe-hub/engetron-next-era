import { Shield, Wifi, Factory, Award, BarChart3, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Disponibilidade Total",
    description: "Sistemas online dupla conversão com transferência em 0ms. Paralelismo de capacidade e redundância para soluções de até 6,6 MVA.",
  },
  {
    icon: Wifi,
    title: "Gestão IoT Completa",
    description: "Monitoramento remoto em tempo real de todos os parâmetros: potência, autonomia, tensão, alarmes e diagnósticos preditivos.",
  },
  {
    icon: BarChart3,
    title: "Eficiência Energética",
    description: "Rendimento elevado com retificador e inversor IGBT. Corrente senoidal pura e fator de potência 0,99 reduzem custos operacionais.",
  },
  {
    icon: Factory,
    title: "Fabricação Nacional",
    description: "Tecnologia própria com engenharia 100% brasileira. Suporte técnico direto do fabricante e rede de assistências técnicas em todo o país.",
  },
  {
    icon: Award,
    title: "Até 5 Anos de Garantia",
    description: "A maior garantia do mercado em Nobreaks/UPS IoT trifásicos. Confiança respaldada por mais de 48 anos de atuação.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Engenharia de Aplicação dedicada para dimensionar a solução ideal. Atendimento técnico personalizado em todo o território nacional.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="solucoes" className="section-padding bg-surface-warm">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Por que Engetron</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A parceira certa para sua infraestrutura de energia
          </h2>
          <p className="text-muted-foreground">
            Soluções completas que combinam hardware robusto, conectividade IoT e suporte técnico especializado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-lg p-6 card-hover"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">
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
