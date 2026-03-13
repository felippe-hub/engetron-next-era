import { Activity, Thermometer, Zap, Battery, Wifi, AlertTriangle } from "lucide-react";

const gaugeData = [
  { label: "Tensão Entrada", value: "220V", percent: 88, color: "primary" },
  { label: "Tensão Saída", value: "220V", percent: 92, color: "accent" },
  { label: "Carga", value: "67%", percent: 67, color: "primary" },
  { label: "Bateria", value: "98%", percent: 98, color: "accent" },
];

const alerts = [
  { type: "ok", message: "Sistema operando normalmente", time: "agora" },
  { type: "ok", message: "Bateria em carga completa", time: "2min" },
  { type: "warn", message: "Temperatura acima de 35°C - monitorando", time: "15min" },
];

const IoTDashboard = () => {
  return (
    <section id="iot" className="section-padding relative">
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Engetron IoT</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Monitoramento em tempo real
          </h2>
          <p className="text-muted-foreground text-lg">
            Visualize toda sua infraestrutura de energia em um único dashboard inteligente.
          </p>
        </div>

        {/* Dashboard simulation */}
        <div className="max-w-5xl mx-auto bg-card/60 backdrop-blur border border-border rounded-2xl p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-foreground">Painel de Controle</p>
                <p className="text-xs text-muted-foreground">Unidade São Paulo — Sala 04</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-accent" />
              <span className="text-xs text-accent font-medium">Conectado</span>
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {gaugeData.map((item) => (
              <div key={item.label} className="bg-background/50 border border-border/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-2">{item.label}</p>
                <p className="text-2xl font-display font-bold text-foreground mb-3">{item.value}</p>
                <div className="h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      item.color === "accent" ? "gradient-accent" : "gradient-primary"
                    }`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Chart simulation */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Waveform */}
            <div className="md:col-span-2 bg-background/50 border border-border/50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-display font-semibold text-foreground">Forma de Onda — Saída</p>
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-end gap-[2px] h-32">
                {Array.from({ length: 48 }).map((_, i) => {
                  const h = Math.abs(Math.sin((i / 48) * Math.PI * 4)) * 100;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/60 animate-data-flow"
                      style={{
                        height: `${Math.max(h, 4)}%`,
                        animationDelay: `${i * 0.06}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-background/50 border border-border/50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-display font-semibold text-foreground">Alertas</p>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                      alert.type === "ok" ? "bg-accent" : "bg-yellow-500"
                    }`} />
                    <div className="min-w-0">
                      <p className="text-xs text-foreground leading-snug">{alert.message}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
            {[
              { icon: Thermometer, label: "Temperatura", value: "32°C" },
              { icon: Battery, label: "Autonomia", value: "45 min" },
              { icon: Zap, label: "Rendimento", value: "96.8%" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-sm font-display font-semibold text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTDashboard;
