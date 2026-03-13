import { Activity, Thermometer, Zap, Battery, Wifi, AlertTriangle } from "lucide-react";

const gaugeData = [
  { label: "Tensão Entrada", value: "220V", percent: 88, isAccent: false },
  { label: "Tensão Saída", value: "220V", percent: 92, isAccent: true },
  { label: "Carga", value: "67%", percent: 67, isAccent: false },
  { label: "Bateria", value: "98%", percent: 98, isAccent: true },
];

const alerts = [
  { type: "ok", message: "Sistema operando normalmente", time: "agora" },
  { type: "ok", message: "Bateria em carga completa", time: "2min" },
  { type: "warn", message: "Manutenção preventiva agendada", time: "15min" },
];

const IoTDashboard = () => {
  return (
    <section id="iot" className="section-padding bg-engetron-dark relative">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - copy */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">Engetron IoT</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight" style={{ color: 'hsl(0,0%,100%)' }}>
              Monitoramento inteligente em tempo real
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'hsl(0,0%,65%)' }}>
              O Sistema Engetron IoT permite gestão completa e remota de toda sua infraestrutura de energia. Receba diagnósticos preditivos, acompanhe parâmetros críticos e reduza custos de manutenção em até 40%.
            </p>
            <ul className="space-y-3">
              {[
                "Monitoramento 24/7 de potência, tensão e autonomia",
                "Alertas preditivos para manutenção preventiva",
                "Dashboard multi-unidade para gestão centralizada",
                "Relatórios automáticos de desempenho e eficiência",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'hsl(0,0%,75%)' }}>
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Dashboard simulation */}
          <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: 'hsl(220,20%,22%)', backgroundColor: 'hsl(220,25%,11%)' }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b" style={{ borderColor: 'hsl(220,20%,22%)' }}>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-display font-semibold" style={{ color: 'hsl(0,0%,90%)' }}>Painel de Controle</p>
                  <p className="text-[10px]" style={{ color: 'hsl(0,0%,50%)' }}>Unidade São Paulo — Sala 04</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi className="h-3.5 w-3.5 text-green-500" />
                <span className="text-[10px] text-green-500 font-medium">Online</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {gaugeData.map((item) => (
                <div key={item.label} className="rounded-lg p-3" style={{ backgroundColor: 'hsl(220,25%,14%)' }}>
                  <p className="text-[10px] mb-1" style={{ color: 'hsl(0,0%,50%)' }}>{item.label}</p>
                  <p className="text-xl font-display font-bold" style={{ color: 'hsl(0,0%,95%)' }}>{item.value}</p>
                  <div className="h-1 w-full rounded-full mt-2" style={{ backgroundColor: 'hsl(220,20%,20%)' }}>
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${item.percent}%`, ...(item.isAccent ? { backgroundColor: '#22c55e' } : {}) }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Waveform */}
            <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'hsl(220,25%,14%)' }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-display font-semibold" style={{ color: 'hsl(0,0%,80%)' }}>Forma de Onda — Saída</p>
                <Zap className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="flex items-end gap-[2px] h-20">
                {Array.from({ length: 40 }).map((_, i) => {
                  const h = Math.abs(Math.sin((i / 40) * Math.PI * 4)) * 100;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/50"
                      style={{
                        height: `${Math.max(h, 4)}%`,
                        animation: `data-flow 3s ease-in-out infinite`,
                        animationDelay: `${i * 0.06}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Alerts */}
            <div className="rounded-lg p-4" style={{ backgroundColor: 'hsl(220,25%,14%)' }}>
              <p className="text-xs font-display font-semibold mb-3" style={{ color: 'hsl(0,0%,80%)' }}>Alertas Recentes</p>
              <div className="space-y-2">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                      alert.type === "ok" ? "bg-green-500" : "bg-yellow-500"
                    }`} />
                    <p className="text-[11px] flex-1" style={{ color: 'hsl(0,0%,70%)' }}>{alert.message}</p>
                    <span className="text-[10px]" style={{ color: 'hsl(0,0%,40%)' }}>{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t" style={{ borderColor: 'hsl(220,20%,22%)' }}>
              {[
                { icon: Thermometer, label: "Temperatura", value: "32°C" },
                { icon: Battery, label: "Autonomia", value: "45 min" },
                { icon: Zap, label: "Rendimento", value: "96.8%" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="h-3.5 w-3.5 shrink-0" style={{ color: 'hsl(0,0%,45%)' }} />
                  <div>
                    <p className="text-[10px]" style={{ color: 'hsl(0,0%,45%)' }}>{stat.label}</p>
                    <p className="text-xs font-display font-semibold" style={{ color: 'hsl(0,0%,90%)' }}>{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTDashboard;
