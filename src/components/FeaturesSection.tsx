import { Shield, Wifi, Factory, Award, BarChart3, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
    <section id="solucoes" className="section-padding bg-surface-warm relative grid-pattern overflow-hidden">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Por que Engetron</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A parceira certa para sua{" "}
            <span className="text-gradient-red">infraestrutura de energia</span>
          </h2>
          <p className="text-muted-foreground">
            Soluções completas que combinam hardware robusto, conectividade IoT e suporte técnico especializado.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-card border border-border rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
