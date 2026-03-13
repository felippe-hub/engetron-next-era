import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contato" className="section-padding bg-surface-warm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left copy */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Contato</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Fale com um especialista
              </h2>
              <p className="text-muted-foreground max-w-md">
                Nossa equipe de Engenharia de Aplicação vai dimensionar a solução ideal para a sua infraestrutura de energia.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { icon: Phone, text: "+55 (31) 3399-2000" },
                { icon: Mail, text: "comercial@engetron.com.br" },
                { icon: MapPin, text: "Belo Horizonte, MG — Brasil" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Precisa de atendimento urgente? Ligue diretamente para nossa central e fale com um engenheiro especializado.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Mensagem enviada!</h3>
                <p className="text-sm text-muted-foreground">Nosso time entrará em contato em até 24 horas úteis.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Nome *</label>
                    <input
                      required
                      type="text"
                      className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Empresa *</label>
                    <input
                      required
                      type="text"
                      className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">E-mail corporativo *</label>
                    <input
                      required
                      type="email"
                      className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="voce@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Telefone</label>
                    <input
                      type="tel"
                      className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Setor de atuação</label>
                  <select className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                    <option value="">Selecione o setor</option>
                    <option>Data Center</option>
                    <option>Saúde</option>
                    <option>Indústria</option>
                    <option>Telecomunicações</option>
                    <option>Financeiro</option>
                    <option>Varejo</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Como podemos ajudar?</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                    placeholder="Descreva sua necessidade de energia..."
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full text-base" type="submit">
                  Solicitar Orçamento
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
