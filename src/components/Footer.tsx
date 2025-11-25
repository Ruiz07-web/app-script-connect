import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 border-t border-border">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold gradient-text">DAMARAL</div>
              <p className="text-sm text-muted-foreground">
                Transformando ideias em soluções inteligentes através da tecnologia e inovação.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Desenvolvimento Web</li>
                <li className="text-muted-foreground">Automações com IA</li>
                <li className="text-muted-foreground">Integrações API</li>
                <li className="text-muted-foreground">Arquitetura de Soluções</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  contato@damaral.com.br
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  +55 (11) 9999-9999
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Damaral Startup. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
