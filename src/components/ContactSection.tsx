import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 gradient-hero" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left copy */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Contato</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Falar com Especialista
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Nossa equipe de engenheiros vai dimensionar a solução ideal para sua infraestrutura.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "+55 (31) 3399-2000" },
                { icon: Mail, text: "comercial@engetron.com.br" },
                { icon: MapPin, text: "Belo Horizonte, MG — Brasil" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full gradient-accent flex items-center justify-center">
                  <Send className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Mensagem enviada!</h3>
                <p className="text-sm text-muted-foreground">Nosso time entrará em contato em até 24h.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Nome</label>
                    <input
                      required
                      type="text"
                      className="w-full h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Empresa</label>
                    <input
                      required
                      type="text"
                      className="w-full h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">E-mail corporativo</label>
                  <input
                    required
                    type="email"
                    className="w-full h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Setor</label>
                  <select
                    className="w-full h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition appearance-none"
                  >
                    <option value="">Selecione o setor</option>
                    <option>Data Center</option>
                    <option>Saúde</option>
                    <option>Indústria</option>
                    <option>Telecomunicações</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full text-base" type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
