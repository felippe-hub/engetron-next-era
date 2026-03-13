import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Comercialmente, a Engetron garante os prazos combinados e é bem competitiva. Tem bom pós-venda e, pelo fato de ser nacional, é muito mais fácil lidar com relação a peças e técnicos.",
    company: "AEC",
    sector: "Corporativo",
  },
  {
    quote: "Se pudesse escolher, os equipamentos do Governo seriam todos Engetron, pois nunca nos deram problema. Estamos muito satisfeitos porque a Engetron tem um serviço muito bom.",
    company: "Banestes",
    sector: "Financeiro",
  },
  {
    quote: "Na busca por fornecedores de nobreaks, testamos diversas marcas e configurações, e os nobreaks Engetron nos atendem em várias capacidades. São nobreaks que demandam baixa manutenção.",
    company: "Fiat",
    sector: "Indústria",
  },
  {
    quote: "A Engetron é uma empresa presente, com atendimento ágil e alta segurança nas informações e na prestação de serviços. É uma parceira comprometida com nossa filosofia.",
    company: "Hospital Mater Dei",
    sector: "Saúde",
  },
  {
    quote: "Os produtos e serviços da Engetron nos permitiram minimizar os riscos de indisponibilidade dos serviços de TI e agilizar as manutenções preventivas.",
    company: "Banco Mercantil",
    sector: "Financeiro",
  },
  {
    quote: "A Engetron é uma excelente parceira em Minas Gerais, atuando com agilidade nos processos e disponibilidade da equipe.",
    company: "MRV",
    sector: "Corporativo",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="cases" className="section-padding relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.04]" style={{ background: 'hsl(350,82%,42%)' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Cases de Sucesso</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Empresas que{" "}
            <span className="text-gradient-red">confiam na Engetron</span>
          </h2>
          <p className="text-muted-foreground">
            Mais de 48 anos construindo relacionamentos sólidos com os maiores players do mercado.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group bg-card border border-border rounded-lg p-6 relative transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <Quote className="h-6 w-6 text-primary/20 mb-3 transition-colors duration-300 group-hover:text-primary/40" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-display font-bold text-foreground">{t.company}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                  {t.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
