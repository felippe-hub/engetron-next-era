const Footer = () => (
  <footer className="bg-engetron-dark py-12 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <span className="font-display text-xl font-bold text-primary">Engetron</span>
          <p className="text-xs mt-1 mb-4" style={{ color: 'hsl(0,0%,50%)' }}>energia garantida</p>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(0,0%,60%)' }}>
            Desde 1976, a Engetron se destaca pela inovação e qualidade em sistemas de energia com tecnologia 100% nacional.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-display font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Produtos</h4>
          <ul className="space-y-2">
            {["Nobreaks Trifásicos", "Nobreaks Monofásicos", "Linha Compacta", "Rack TI & Energia", "Acessórios"].map((l) => (
              <li key={l}><a href="#" className="text-sm transition-colors hover:text-primary" style={{ color: 'hsl(0,0%,55%)' }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-display font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Institucional</h4>
          <ul className="space-y-2">
            {["Sobre a Engetron", "Cases de Sucesso", "Assistência Técnica", "Trabalhe Conosco", "Blog"].map((l) => (
              <li key={l}><a href="#" className="text-sm transition-colors hover:text-primary" style={{ color: 'hsl(0,0%,55%)' }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-display font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Contato</h4>
          <ul className="space-y-2 text-sm" style={{ color: 'hsl(0,0%,55%)' }}>
            <li>+55 (31) 3399-2000</li>
            <li>comercial@engetron.com.br</li>
            <li>Belo Horizonte, MG</li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'hsl(220,20%,22%)' }}>
        <p className="text-xs" style={{ color: 'hsl(0,0%,45%)' }}>
          © {new Date().getFullYear()} Engetron. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          {["Política de Privacidade", "Termos de Uso"].map((l) => (
            <a key={l} href="#" className="text-xs transition-colors hover:text-primary" style={{ color: 'hsl(0,0%,45%)' }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
